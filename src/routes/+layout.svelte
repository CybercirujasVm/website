<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/header/Header.svelte";
	import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex flex-col min-h-screen">
	<Header />

	<main class="grow">
		{@render children()}
	</main>

	<Footer />
</div>
