<script lang="ts">
  import { enhance } from "$app/forms";
  import Add from "$lib/components/inventory/Add.svelte";

  let { data, form } = $props();
  let showForm = $state(false);
</script>

<div
  class="max-w-7xl mx-auto my-10 p-4 sm:p-6 font-sans text-copy transition-colors duration-300"
>
  <!-- Encabezado del Panel -->
  <div
    class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6"
  >
    <div>
      <h1 class="text-3xl font-black text-primary tracking-tight">
        Panel de Inventario
      </h1>
      <p class="text-copy-muted font-medium mt-2">
        Gestioná los componentes del sistema y el hardware rescatado.
      </p>
    </div>

    {#if !showForm}
      <button
        type="button"
        onclick={() => (showForm = true)}
        class="text-base font-bold text-copy-on-primary px-6 py-3 rounded-2xl bg-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shrink-0"
      >
        {"+ Agregar Hardware"}
      </button>
    {/if}
  </div>

  <!-- Alertas Flash (Sub-cajas Bento) -->
  {#if form?.error && form?.action === "delete"}
    <div
      class="mb-8 p-4 rounded-2xl bg-background border border-danger/40 text-danger font-bold text-sm shadow-sm flex items-center gap-3"
    >
      <svg
        class="w-6 h-6 shrink-0"
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

  {#if form?.success && form?.action === "delete"}
    <div
      class="mb-8 p-4 rounded-2xl bg-background border border-accent/40 text-accent font-bold text-sm shadow-sm flex items-center gap-3"
    >
      <svg
        class="w-6 h-6 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p>Ítem eliminado correctamente.</p>
    </div>
  {/if}

  <!-- Formulario Desplegable -->
  {#if showForm}
    <div class="mb-10 transition-all duration-300">
      <Add {form} onClose={() => (showForm = false)} />
    </div>
  {/if}

  <!-- Contenedor Principal de la Tabla (Caja Bento) -->
  <div
    class="bg-surface border border-border-bento rounded-3xl shadow-sm overflow-hidden transition-colors hover:border-border-bento-hover"
  >
    <div class="overflow-x-auto">
      <table class="min-w-full border-collapse">
        <thead>
          <tr class="border-b border-border-bento bg-background/50">
            <th
              class="px-6 py-5 text-left text-xs font-black text-primary uppercase tracking-wider"
            >
              Componente
            </th>
            <th
              class="px-6 py-5 text-left text-xs font-black text-primary uppercase tracking-wider"
            >
              Cantidad
            </th>
            <th
              class="px-6 py-5 text-left text-xs font-black text-primary uppercase tracking-wider"
            >
              Especificaciones
            </th>
            <th
              class="px-6 py-5 text-right text-xs font-black text-primary uppercase tracking-wider"
            >
              Acciones
            </th>
          </tr>
        </thead>

        <tbody class="text-copy">
          {#if data.inventory && data.inventory.length > 0}
            {#each data.inventory as item, i}
              <tr
                class="transition-colors border-b border-border-bento last:border-0 hover:bg-background/40 group"
              >
                <!-- Nombre -->
                <td class="px-6 py-5 whitespace-nowrap font-bold text-copy">
                  {item.name}
                </td>

                <!-- Cantidad (Píldora Bento) -->
                <td class="px-6 py-5 whitespace-nowrap">
                  <span
                    class="px-4 py-2 text-xs font-bold rounded-xl bg-background border border-border-bento text-copy-muted shadow-sm"
                  >
                    {item.quantity} uni.
                  </span>
                </td>

                <!-- Especificaciones (Tags Bento) -->
                <td class="px-6 py-5 text-sm">
                  <div class="flex flex-wrap gap-2">
                    {#each Object.entries(item.details || {}) as [key, value]}
                      <span
                        class="bg-background border border-border-bento px-3 py-1.5 rounded-xl text-xs shadow-sm"
                      >
                        <strong class="text-primary">{key}:</strong>
                        <span class="text-copy-muted font-medium ml-1"
                          >{value}</span
                        >
                      </span>
                    {/each}
                  </div>
                </td>

                <!-- Botón Eliminar -->
                <td class="px-6 py-5 whitespace-nowrap text-right text-sm">
                  <form
                    method="POST"
                    action="?/delete"
                    use:enhance={({ cancel }) => {
                      const isConfirmed = confirm(
                        `Advertencia: ¿Estás seguro de que querés eliminar "${item.name}"? Esta acción no se puede deshacer.`,
                      );

                      if (!isConfirmed) {
                        cancel();
                      }

                      return async ({ update }) => {
                        await update();
                      };
                    }}
                  >
                    <input type="hidden" name="id" value={item.id} />
                    <button
                      type="submit"
                      class="text-danger font-bold px-4 py-2.5 rounded-xl bg-background border border-border-bento shadow-sm hover:bg-danger/10 hover:border-danger/30 hover:shadow-md active:scale-[0.96] transition-all duration-200"
                      title="Eliminar componente"
                    >
                      Eliminar
                    </button>
                  </form>
                </td>
              </tr>
            {/each}
          {:else}
            <!-- Estado Vacío -->
            <tr>
              <td colspan="4" class="px-6 py-16 text-center">
                <div
                  class="inline-flex flex-col items-center justify-center p-8 rounded-3xl bg-background border-2 border-dashed border-border-bento max-w-sm mx-auto"
                >
                  <p class="text-copy font-bold text-lg">
                    No hay hardware registrado.
                  </p>
                  <p class="text-sm text-copy-muted mt-2">
                    Hacé clic en "+ Agregar Hardware" para empezar a cirujear y
                    poblar el inventario.
                  </p>
                </div>
              </td>
            </tr>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>
