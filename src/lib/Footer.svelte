<script lang="ts">
	import * as m from "$lib/paraglide/messages.js";

	const currentYear = new Date().getFullYear();

	// Definimos las listas usando $derived para que reaccionen al idioma
	let navLinks = $derived([
		{ name: m.footer_nav_manifesto(), href: "/#" },
		{ name: m.footer_nav_activities(), href: "/#" },
		{ name: m.footer_nav_donate(), href: "/#" },
		{ name: m.footer_nav_faq(), href: "/#" },
	]);

	let socialLinks = $derived([
		{ name: "Mastodon", href: "/#", svgPath: "...", isFill: true },
		{
			name: "GitHub",
			href: "https://github.com/cybercirujasvm",
			svgPath: "...",
			isFill: true,
		},
		{
			name: m.footer_social_email(),
			href: "mailto:cybercirujas@disroot.com",
			svgPath: "...",
			isFill: false,
		},
	]);
</script>

<footer
	class="bg-background p-4 md:p-8 text-copy mt-8 overflow-hidden transition-colors duration-300 font-sans"
>
	<div class="max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
			<div
				class="flex flex-col items-start gap-6 bg-surface p-8 rounded-3xl border border-border-bento transition-colors hover:border-border-bento-hover shadow-sm"
			>
				<a
					href="/"
					class="text-2xl font-black tracking-tighter text-primary hover:text-accent transition-colors duration-300"
				>
					Cyber<span class="text-accent">Cirujas</span>
				</a>
				<p
					class="font-medium text-base md:text-sm leading-relaxed text-copy-muted"
				>
					{m.footer_about_text()}
				</p>
			</div>

			<div
				class="flex flex-col gap-5 bg-surface p-8 rounded-3xl border border-border-bento transition-colors hover:border-border-bento-hover shadow-sm"
			>
				<h3 class="text-lg font-bold text-copy">{m.footer_nav_title()}</h3>
				<div class="flex flex-col gap-3">
					{#each navLinks as link}
						<a
							href={link.href}
							class="flex items-center gap-3 text-copy-muted hover:text-copy px-4 py-3 rounded-2xl bg-background border border-border-bento hover:border-border-bento-hover transition-all duration-300 active:scale-[0.98]"
						>
							<span class="w-2 h-2 rounded-full bg-accent"></span>
							{link.name}
						</a>
					{/each}
				</div>
			</div>

			<div
				class="flex flex-col gap-5 bg-surface p-8 rounded-3xl border border-border-bento transition-colors hover:border-border-bento-hover shadow-sm"
			>
				<div class="flex flex-col gap-1">
					<h3 class="text-lg font-bold text-copy">{m.footer_social_title()}</h3>
					<p class="text-sm text-copy-muted">{m.footer_social_subtitle()}</p>
				</div>

				<div class="flex flex-wrap gap-4 mt-2">
					{#each socialLinks as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="bg-background text-copy p-4 rounded-2xl border border-border-bento hover:border-border-bento-hover hover:-translate-y-1 hover:text-accent hover:shadow-md transition-all duration-300 flex items-center justify-center"
							aria-label={social.name}
						>
							<svg
								class="w-6 h-6"
								fill={social.isFill ? "currentColor" : "none"}
								stroke={!social.isFill ? "currentColor" : "none"}
								viewBox="0 0 24 24"
							>
								{@html social.svgPath}
							</svg>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div
			class="p-6 md:p-8 rounded-3xl bg-surface border border-border-bento shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-copy-muted transition-colors hover:border-border-bento-hover"
		>
			<p class="flex items-center gap-3">
				<span
					class="text-lg rounded-full w-10 h-10 flex items-center justify-center bg-background border border-border-bento text-primary font-black"
					>🄯</span
				>
				Copyleft {currentYear} CyberCirujas.
			</p>

			<p
				class="px-6 py-3 rounded-2xl bg-background border border-border-bento text-center md:text-left"
			>
				{m.footer_made_with()}
			</p>
		</div>
	</div>
</footer>
