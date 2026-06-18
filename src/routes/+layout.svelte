<script lang="ts">
  import "./layout.css";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import { i18n } from "$lib/i18n";

  import favicon from "$lib/assets/favicon.svg";
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import type { LayoutData } from "./$types";

  let {
    data,
    children,
  }: { data: LayoutData; children: import("svelte").Snippet } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<ParaglideJS {i18n}>
  <div class="flex flex-col min-h-screen">
    <Header session={data.session} />

    <main class="grow">
      {@render children()}
    </main>

    <Footer />
  </div>
</ParaglideJS>
