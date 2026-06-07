<script lang="ts">
  import { enhance } from "$app/forms";
  // import * as m from "$lib/paraglide/messages.js";

  let { form, onClose } = $props<{
    form: any;
    onClose: () => void;
  }>();

  let isSubmitting = $state(false);
  let name = $state("");
  let quantity = $state(1);
  let details = $state([{ key: "", value: "" }]);

  const addDetail = () => {
    details.push({ key: "", value: "" });
  };

  const removeDetail = (index: number) => {
    details.splice(index, 1);
  };
</script>

<!-- Tarjeta Principal (Caja Bento) -->
<div
  class="p-6 md:p-10 bg-surface rounded-3xl border border-border-bento shadow-sm font-sans text-copy transition-colors duration-300"
>
  <!-- Encabezado -->
  <div class="flex justify-between items-center mb-8 gap-4">
    <h2 class="text-2xl font-black text-primary tracking-tight">
      Agregar Nuevo Ítem
    </h2>
    <button
      type="button"
      onclick={onClose}
      class="text-sm font-bold text-copy-muted px-4 py-2 rounded-xl bg-background border border-border-bento hover:border-border-bento-hover hover:text-copy transition-all duration-200 shrink-0"
    >
      Cancelar
    </button>
  </div>

  <form
    method="POST"
    action="?/add"
    class="space-y-6"
    use:enhance={({ formData }) => {
      isSubmitting = true;

      const detailsObj = details.reduce(
        (acc, curr) => {
          if (curr.key.trim() !== "") {
            acc[curr.key.trim()] = curr.value.trim();
          }
          return acc;
        },
        {} as Record<string, string>,
      );

      formData.set("details", JSON.stringify(detailsObj));

      return async ({ update }) => {
        await update({ reset: true });
        isSubmitting = false;
        if (form?.success) {
          name = "";
          quantity = 1;
          details = [{ key: "", value: "" }];
          onClose();
        }
      };
    }}
  >
    <!-- Primera fila: Nombre y Cantidad -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="md:col-span-2 flex flex-col gap-2">
        <label for="name" class="text-sm font-bold text-copy pl-1">
          Equipo o Componente
        </label>
        <input
          type="text"
          id="name"
          name="name"
          bind:value={name}
          required
          class="w-full bg-background text-copy px-4 py-3 rounded-2xl border border-border-bento outline-none shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-copy-muted/50"
          placeholder="Ej: Computadora de Escritorio"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="quantity" class="text-sm font-bold text-copy pl-1">
          Cantidad
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          bind:value={quantity}
          min="0"
          required
          class="w-full bg-background text-copy px-4 py-3 rounded-2xl border border-border-bento outline-none shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
      </div>
    </div>

    <!-- Divisor Bento -->
    <hr class="border-t border-border-bento my-2" />

    <!-- Sección de Detalles Dinámicos -->
    <div class="bg-surface">
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3"
      >
        <h3 class="text-lg font-bold text-copy">Especificaciones Técnicas</h3>
        <button
          type="button"
          onclick={addDetail}
          class="text-sm font-bold text-accent px-4 py-2 rounded-xl bg-background border border-border-bento hover:border-border-bento-hover transition-all duration-200"
        >
          + Agregar Campo
        </button>
      </div>

      <div class="space-y-3">
        {#each details as detail, index}
          <div class="flex items-center gap-3">
            <input
              type="text"
              placeholder="Ej: RAM"
              bind:value={detail.key}
              class="block w-1/3 min-w-[100px] bg-background text-copy px-4 py-3 rounded-xl border border-border-bento outline-none shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm font-medium placeholder:text-copy-muted/50"
            />
            <span class="text-copy-muted font-bold">:</span>
            <input
              type="text"
              placeholder="Ej: 8GB DDR4"
              bind:value={detail.value}
              class="block w-full bg-background text-copy px-4 py-3 rounded-xl border border-border-bento outline-none shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm placeholder:text-copy-muted/50"
            />
            <button
              aria-label="Eliminar"
              type="button"
              onclick={() => removeDetail(index)}
              class="p-3 rounded-xl bg-background border border-border-bento text-danger hover:bg-danger/10 hover:border-danger/30 transition-all duration-200 shrink-0"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        {/each}
      </div>
    </div>

    <!-- Divisor Bento -->
    <hr class="border-t border-border-bento my-2" />

    <!-- Zona de Botonera y Errores -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-5">
      <div class="w-full sm:flex-1">
        {#if form?.error}
          <div
            class="p-3 rounded-xl bg-background border border-danger/40 text-danger font-medium text-sm shadow-sm flex items-center gap-3"
          >
            <svg
              class="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{form.error}</p>
          </div>
        {/if}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        class="w-full sm:w-auto text-base font-bold text-copy-on-primary bg-primary px-8 py-3.5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 transition-all duration-200"
      >
        {isSubmitting ? "Guardando..." : "Guardar en Inventario"}
      </button>
    </div>
  </form>
</div>
