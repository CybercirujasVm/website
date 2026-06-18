<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import type { Session } from "@supabase/supabase-js";

  let { session }: { session: Session | null } = $props();

  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  let navLinks = $derived([
    { name: m.nav_about(), href: "/about" },
    { name: m.nav_nodes(), href: "/nodes" },
    { name: m.nav_donations(), href: "/donations" },
  ]);
</script>

<header class="p-4 md:p-6 font-sans text-copy transition-colors duration-300">
  <div
    class="max-w-7xl mx-auto flex justify-between items-center bg-surface border border-border-bento rounded-full px-6 py-3 shadow-sm"
  >
    <a
      href="/"
      class="text-2xl font-black tracking-tighter text-primary hover:text-accent transition-colors duration-300"
    >
      Cyber<span class="text-accent">Cirujas</span>
    </a>

    <nav class="hidden md:flex gap-2 items-center font-bold text-[15px]">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-copy-muted hover:text-copy hover:bg-background px-4 py-2 rounded-2xl transition-all duration-300"
        >
          {link.name}
        </a>
      {/each}

      {#if session}
        <form action="/logout" method="POST" class="m-0">
          <button
            type="submit"
            class="text-copy-muted hover:text-copy hover:bg-background px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer"
          >
            {m.nav_logout()}
          </button>
        </form>
      {:else}
        <a
          href="/login"
          class="text-copy-muted hover:text-copy hover:bg-background px-4 py-2 rounded-2xl transition-all duration-300"
        >
          {m.nav_login()}
        </a>
      {/if}

      <a
        href="/#"
        class="ml-2 text-copy-on-primary bg-primary px-5 py-2 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-primary/90 transition-all duration-300"
      >
        {m.nav_join()}
      </a>
    </nav>

    <button
      onclick={toggleMenu}
      class="md:hidden text-copy p-2 rounded-xl border transition-all duration-300 focus:outline-none flex items-center justify-center
      {isMenuOpen
        ? 'bg-background border-border-bento'
        : 'border-transparent hover:bg-background hover:border-border-bento'}"
      aria-label={m.nav_toggle_menu()}
    >
      {#if isMenuOpen}
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      {:else}
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      {/if}
    </button>
  </div>

  {#if isMenuOpen}
    <nav
      class="md:hidden mt-4 max-w-7xl mx-auto flex flex-col gap-3 font-bold text-lg p-5 rounded-3xl bg-surface border border-border-bento shadow-sm transition-all duration-300"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          class="block text-center text-copy-muted bg-background border border-border-bento p-3 rounded-2xl hover:text-copy hover:border-border-bento-hover active:scale-[0.98] transition-all duration-200"
        >
          {link.name}
        </a>
      {/each}

      {#if session}
        <form action="/logout" method="POST" class="block w-full m-0">
          <button
            type="submit"
            class="w-full text-center text-copy-muted bg-background border border-border-bento p-3 rounded-2xl hover:text-copy hover:border-border-bento-hover active:scale-[0.98] transition-all duration-200"
          >
            Cerrar sesión
          </button>
        </form>
      {:else}
        <a
          href="/login"
          class="block text-center text-copy-muted bg-background border border-border-bento p-3 rounded-2xl hover:text-copy hover:border-border-bento-hover active:scale-[0.98] transition-all duration-200"
        >
          {m.nav_login()}
        </a>
      {/if}

      <a
        href="/#"
        class="block text-center text-copy-on-primary bg-primary p-3 rounded-2xl shadow-sm active:scale-[0.98] transition-all duration-200 mt-1"
      >
        {m.nav_join()}
      </a>
    </nav>
  {/if}
</header>
