<script>
  // Svelte 5 usa runas para la reactividad
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-amber-50 border-b-4 border-black p-4 font-mono text-gray-900">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <a
      href="/"
      class="text-2xl font-black tracking-tighter bg-cyan-300 px-3 py-1 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all"
    >
      Cyber<span class="text-pink-600">Cirujas</span>
    </a>

    <nav class="hidden md:flex gap-6 items-center font-bold text-lg">
      <a
        href="/filosofia"
        class="hover:bg-yellow-300 px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
      >
        Filosofía
      </a>
      <a
        href="/hardware"
        class="hover:bg-yellow-300 px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
      >
        Hardware
      </a>
      <a
        href="/comunidad"
        class="hover:bg-yellow-300 px-2 py-1 border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
      >
        Comunidad
      </a>
      <a
        href="/sumate"
        class="bg-pink-400 text-white px-5 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all"
      >
        ¡Sumate!
      </a>
    </nav>

    <button
      onclick={toggleMenu}
      class="md:hidden bg-yellow-300 p-2 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-0.75 hover:translate-x-0.75 transition-all focus:outline-none"
      aria-label="Toggle menu"
    >
      {#if isMenuOpen}
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M6 18L18 6M6 6l12 12"
          ></path></svg
        >
      {:else}
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M4 6h16M4 12h16M4 18h16"
          ></path></svg
        >
      {/if}
    </button>
  </div>

  {#if isMenuOpen}
    <nav
      class="md:hidden mt-6 flex flex-col gap-3 font-bold text-lg border-t-4 border-black pt-6"
    >
      <a
        href="/filosofia"
        class="block bg-white p-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0.75 active:translate-x-0.75"
      >
        Filosofía
      </a>
      <a
        href="/hardware"
        class="block bg-white p-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0.75 active:translate-x-0.75"
      >
        Hardware
      </a>
      <a
        href="/comunidad"
        class="block bg-white p-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0.75 active:translate-x-0.75"
      >
        Comunidad
      </a>
      <a
        href="/sumate"
        class="block bg-pink-400 text-white p-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0.75 active:translate-x-0.75"
      >
        ¡Sumate!
      </a>
    </nav>
  {/if}
</header>
