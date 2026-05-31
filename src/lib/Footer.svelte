<script>
	// Obtenemos el año actual para el copyleft
	const currentYear = new Date().getFullYear();
</script>

<footer
	class="bg-amber-50 border-t-4 border-black p-8 md:p-12 font-mono text-gray-900 mt-12 overflow-hidden"
>
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
		<!-- Branding y Misión -->
		<div class="flex flex-col items-start gap-4">
			<a
				href="/"
				class="text-2xl font-black tracking-tighter bg-cyan-300 px-3 py-1 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all"
			>
				Cyber<span class="text-pink-600">Cirujas</span>
			</a>
			<p
				class="font-bold text-sm leading-relaxed max-w-xs mt-2 bg-white p-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]"
			>
				Rescatando computadoras de la basura, combatiendo la obsolescencia
				programada y militando el software libre.
			</p>
		</div>

		<!-- Links de Navegación -->
		<div class="flex flex-col gap-3 font-bold">
			<h3
				class="text-xl bg-yellow-300 inline-block px-2 border-2 border-black w-max shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2"
			>
				Navegación
			</h3>
			<a
				href="/manifiesto"
				class="hover:text-pink-600 hover:underline decoration-2 hover:translate-x-1 transition-transform w-max"
			>
				► Nuestro Manifiesto
			</a>
			<a
				href="/actividades"
				class="hover:text-pink-600 hover:underline decoration-2 hover:translate-x-1 transition-transform w-max"
			>
				► Actividades
			</a>
			<a
				href="/donaciones"
				class="hover:text-pink-600 hover:underline decoration-2 hover:translate-x-1 transition-transform w-max"
			>
				► Doná Hardware
			</a>
			<a
				href="/faq"
				class="hover:text-pink-600 hover:underline decoration-2 hover:translate-x-1 transition-transform w-max"
			>
				► Preguntas Frecuentes
			</a>
		</div>

		<!-- Redes Sociales y Contacto -->
		<div class="flex flex-col gap-3 font-bold">
			<h3
				class="text-xl bg-green-300 inline-block px-2 border-2 border-black w-max shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2"
			>
				Conectate
			</h3>
			<p class="text-sm mb-1">Encontranos en la matrix:</p>
			<div class="flex gap-4">
				<!-- Mastodon (Fediverso) -->
				<a
					href="https://mastodon.social"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-white p-2 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-0.75 hover:translate-x-0.75 transition-all"
					aria-label="Mastodon"
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 3.13-.025 7.288 1.372 10.77 1.841 4.603 6.41 4.5 6.41 4.5 2.766.19 5.228-.58 5.228-.58l-.326-2.698s-1.92.535-4.113.535c-1.936 0-2.222-.756-2.222-.756s1.29.356 4.143.235c3.08-.135 5.215-1.127 5.215-1.127 0 0 3.018-2.607 2.993-11.411zM16.924 15.3v-4.106c0-1.282-.544-1.924-1.63-1.924-1.218 0-1.828.74-1.828 2.215v2.805h-2.932v-2.805c0-1.474-.61-2.215-1.828-2.215-1.086 0-1.63.642-1.63 1.924v4.106H4.14v-4.464c0-2.637 1.233-3.955 3.699-3.955 1.458 0 2.502.505 3.13 1.516l.462.885.462-.885c.628-1.01 1.672-1.516 3.13-1.516 2.466 0 3.699 1.318 3.699 3.955v4.464h-2.93z"
						/></svg
					>
				</a>
				<!-- GitHub -->
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-white p-2 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-0.75 hover:translate-x-0.75 transition-all"
					aria-label="GitHub"
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						/></svg
					>
				</a>
				<!-- Correo/Mail -->
				<a
					href="mailto:hola@cybercirujas.org"
					class="bg-white p-2 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-0.75 hover:translate-x-0.75 transition-all"
					aria-label="Enviar correo"
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						></path></svg
					>
				</a>
			</div>
		</div>
	</div>

	<!-- Barra Inferior / Copyleft -->
	<div
		class="max-w-7xl mx-auto mt-12 pt-6 border-t-4 border-dashed border-black flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold"
	>
		<p class="flex items-center gap-2">
			<span class="text-xl">🄯</span> Copyleft {currentYear} CyberCirujas.
		</p>
		<p class="bg-black text-white px-3 py-1">
			Hecho con <span class="text-pink-500">♥</span>, mate y hardware
			reciclado.
		</p>
	</div>
</footer>
