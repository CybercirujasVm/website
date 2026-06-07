<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";

  let { form } = $props();
</script>

<div
  class="min-h-[80vh] flex items-center justify-center px-4 font-sans text-copy transition-colors duration-300"
>
  <!-- Tarjeta Principal (Caja Bento) -->
  <div
    class="w-full max-w-md bg-surface p-8 sm:p-10 rounded-3xl border border-border-bento shadow-sm transition-colors hover:border-border-bento-hover"
  >
    <h1
      class="text-3xl font-black text-center text-primary mb-8 tracking-tight"
    >
      {m.login_title()}
    </h1>

    <!-- Alerta de Error (Sub-caja Bento) -->
    {#if form?.error}
      <div
        class="mb-6 p-4 rounded-2xl bg-background border border-danger/40 text-danger font-medium text-sm flex items-center gap-3 shadow-sm"
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

    <form method="POST" action="?/login" class="flex flex-col gap-5">
      <!-- Campo Email -->
      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm font-bold text-copy pl-1">
          {m.login_email()}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          class="w-full bg-background text-copy px-5 py-4 rounded-2xl border border-border-bento outline-none shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-copy-muted/50"
          placeholder="tu@email.com"
        />
      </div>

      <!-- Campo Contraseña -->
      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm font-bold text-copy pl-1">
          {m.login_password()}
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          class="w-full bg-background text-copy px-5 py-4 rounded-2xl border border-border-bento outline-none shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-copy-muted/50"
          placeholder="••••••••"
        />
      </div>

      <!-- Botón Submit -->
      <button
        type="submit"
        class="mt-4 w-full text-lg font-bold text-copy-on-primary bg-primary py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
      >
        {m.login_submit()}
      </button>
    </form>
  </div>
</div>
