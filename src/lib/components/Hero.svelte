<script lang="ts">
	import * as m from "$lib/paraglide/messages.js";

	let actionButtons = $derived([
		{
			label: m.hero_btn_enter(),
			href: "/#",
			isPrimary: true,
		},
		{
			label: m.hero_btn_nodes(),
			href: "/nodes",
			isPrimary: false,
		},
	]);
</script>

<section
	class="bg-background p-4 md:p-8 font-sans text-copy min-h-[85vh] flex items-center transition-colors duration-300"
>
	<div
		class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
	>
		<div
			class="md:col-span-7 flex flex-col gap-6 justify-center items-start bg-surface p-8 md:p-12 rounded-3xl border border-border-bento shadow-sm transition-colors hover:border-border-bento-hover"
		>
			<span
				class="inline-flex items-center gap-3 text-accent text-sm font-bold px-4 py-2 rounded-full border border-border-bento bg-background"
			>
				<span
					class="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]"
				></span>
				{m.hero_status()}
			</span>

			<h1
				class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight md:leading-snug"
			>
				{@html m.hero_title()}
			</h1>

			<div
				class="p-6 rounded-2xl bg-background border border-border-bento w-full transition-colors hover:border-border-bento-hover"
			>
				<p
					class="text-base md:text-lg font-medium leading-relaxed text-copy-muted"
				>
					{m.hero_description()}
				</p>
			</div>

			<div class="flex flex-wrap gap-4 mt-2 w-full sm:w-auto">
				{#each actionButtons as button}
					<a
						href={button.href}
						class="flex-1 sm:flex-none text-center text-base md:text-lg font-bold px-8 py-4 rounded-xl transition-all duration-200 {button.isPrimary
							? 'text-copy-on-primary bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5'
							: 'text-copy bg-surface border border-border-bento hover:border-border-bento-hover hover:bg-background shadow-sm hover:shadow-md hover:-translate-y-0.5'}"
					>
						{button.label}
					</a>
				{/each}
			</div>
		</div>

		<div
			class="md:col-span-5 flex flex-col justify-center items-center relative group bg-surface p-8 md:p-12 rounded-3xl border border-border-bento shadow-sm overflow-hidden transition-colors hover:border-border-bento-hover min-h-87.5 md:min-h-full"
		>
			<div
				class="relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72 rounded-full bg-background border border-border-bento z-10 transition-transform duration-500 group-hover:scale-105 shadow-sm group-hover:shadow-md"
			>
				<span
					class="font-black text-[90px] md:text-[120px] leading-none tracking-tighter text-primary transition-colors duration-500 select-none group-hover:text-accent"
				>
					CC
				</span>
			</div>
		</div>
	</div>
</section>
