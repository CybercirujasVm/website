<script>
	const currentYear = new Date().getFullYear();

	const navLinks = [
		{ name: "Nuestro Manifiesto", href: "/#" },
		{ name: "Actividades", href: "/#" },
		{ name: "Doná Hardware", href: "/#" },
		{ name: "Preguntas Frecuentes", href: "/#" },
	];

	const socialLinks = [
		{
			name: "Mastodon",
			href: "/#",
			svgPath:
				'<path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 3.13-.025 7.288 1.372 10.77 1.841 4.603 6.41 4.5 6.41 4.5 2.766.19 5.228-.58 5.228-.58l-.326-2.698s-1.92.535-4.113.535c-1.936 0-2.222-.756-2.222-.756s1.29.356 4.143.235c3.08-.135 5.215-1.127 5.215-1.127 0 0 3.018-2.607 2.993-11.411zM16.924 15.3v-4.106c0-1.282-.544-1.924-1.63-1.924-1.218 0-1.828.74-1.828 2.215v2.805h-2.932v-2.805c0-1.474-.61-2.215-1.828-2.215-1.086 0-1.63.642-1.63 1.924v4.106H4.14v-4.464c0-2.637 1.233-3.955 3.699-3.955 1.458 0 2.502.505 3.13 1.516l.462.885.462-.885c.628-1.01 1.672-1.516 3.13-1.516 2.466 0 3.699 1.318 3.699 3.955v4.464h-2.93z" />',
			isFill: true,
		},
		{
			name: "GitHub",
			href: "https://github.com/cybercirujasvm",
			svgPath:
				'<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />',
			isFill: true,
		},
		{
			name: "Enviar correo",
			href: "mailto:cybercirujas@disroot.com",
			svgPath:
				'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />',
			isFill: false,
		},
	];
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
					Rescatando computadoras de la basura, combatiendo la obsolescencia
					programada y militando el software libre.
				</p>
			</div>

			<div
				class="flex flex-col gap-5 bg-surface p-8 rounded-3xl border border-border-bento transition-colors hover:border-border-bento-hover shadow-sm"
			>
				<h3 class="text-lg font-bold text-copy">Navegación</h3>

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
					<h3 class="text-lg font-bold text-copy">Conectate</h3>
					<p class="text-sm text-copy-muted">Encontranos en la matrix:</p>
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
				>
					🄯
				</span>
				Copyleft {currentYear} CyberCirujas.
			</p>

			<p
				class="px-6 py-3 rounded-2xl bg-background border border-border-bento text-center md:text-left"
			>
				Hecho con <span class="text-accent animate-pulse">♥</span>, mate y
				hardware reciclado.
			</p>
		</div>
	</div>
</footer>
