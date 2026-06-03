<script>
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  const navLinks = [
    { name: "Nosotros", href: "/about" },
    { name: "Nodos", href: "/nodes" },
    { name: "Donaciones", href: "/donations" },
  ];
</script>

<header
  class="bg-background border-b-4 border-copy p-4 font-mono text-copy transition-colors duration-200"
>
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <a
      href="/"
      class="text-2xl font-black tracking-tighter bg-primary text-surface px-3 py-1 border-2 border-copy shadow-[4px_4px_0px_var(--color-copy)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all"
    >
      Cyber<span class="text-accent">Cirujas</span>
    </a>

    <nav class="hidden md:flex gap-6 items-center font-bold text-lg">
      {#each navLinks as link}
        <a
          href={link.href}
          class="hover:bg-surface px-2 py-1 border-2 border-transparent hover:border-copy hover:shadow-[2px_2px_0px_var(--color-copy)] transition-all"
        >
          {link.name}
        </a>
      {/each}

      <a
        href="/sumate"
        class="bg-accent text-background px-5 py-2 border-2 border-copy shadow-[4px_4px_0px_var(--color-copy)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all"
      >
        ¡Sumate!
      </a>
    </nav>

    <button
      onclick={toggleMenu}
      class="md:hidden bg-primary text-surface p-2 border-2 border-copy shadow-[3px_3px_0px_var(--color-copy)] hover:shadow-none hover:translate-y-0.75 hover:translate-x-0.75 transition-all focus:outline-none"
      aria-label="Toggle menu"
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
            stroke-width="3"
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
            stroke-width="3"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      {/if}
    </button>
  </div>

  {#if isMenuOpen}
    <nav
      class="md:hidden mt-6 flex flex-col gap-3 font-bold text-lg border-t-4 border-copy pt-6"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          class="block bg-surface p-3 border-2 border-copy shadow-[3px_3px_0px_var(--color-copy)] active:shadow-none active:translate-y-0.75 active:translate-x-0.75 transition-all"
        >
          {link.name}
        </a>
      {/each}

      <a
        href="/sumate"
        class="block bg-accent text-background p-3 border-2 border-copy shadow-[3px_3px_0px_var(--color-copy)] active:shadow-none active:translate-y-0.75 active:translate-x-0.75 transition-all"
      >
        ¡Sumate!
      </a>
    </nav>
  {/if}
</header>
