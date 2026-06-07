<script lang="ts">
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import { i18n } from "$lib/i18n";

  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/header/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<ParaglideJS {i18n}>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="grow">
      {@render children()}
    </main>

    <Footer />
  </div>
</ParaglideJS>
