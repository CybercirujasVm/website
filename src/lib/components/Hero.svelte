<script>
	const actionButtons = [
		{
			label: "Entrar a la Red",
			href: "/#",
			isPrimary: true,
		},
		{
			label: "Buscar Nodos",
			href: "/nodes",
			isPrimary: false,
		},
	];
</script>

<section
	class="bg-background p-6 md:p-12 font-mono text-copy overflow-hidden transition-colors duration-200"
>
	<div
		class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-4 border-copy bg-surface p-8 md:p-16 shadow-[8px_8px_0px_var(--color-copy)] transition-colors duration-200"
	>
		<div
			class="flex justify-center items-center relative group order-2 md:order-1"
		>
			<div
				class="absolute -inset-4 grid grid-cols-6 gap-2 opacity-20 group-hover:opacity-40 transition-opacity"
			>
				{#each Array(24) as _}
					<div class="w-2 h-2 bg-copy rounded-full"></div>
				{/each}
			</div>

			<div
				class="relative bg-primary text-surface font-black text-[120px] md:text-[180px] leading-none tracking-tighter px-6 py-2 border-4 border-copy shadow-[12px_12px_0px_var(--color-copy)] transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[20px_20px_0px_var(--color-copy)] transition-all duration-150 ease-in-out select-none"
				style="font-family: 'Archivo Black', sans-serif;"
			>
				CC
				<span
					class="absolute top-0 left-0 w-full h-full text-accent opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-all"
					aria-hidden="true"
				>
					CC
				</span>
			</div>
		</div>

		<div class="flex flex-col gap-6 items-start order-1 md:order-2">
			<span
				class="inline-block bg-accent text-background text-sm font-bold px-3 py-1 border-2 border-copy shadow-[3px_3px_0px_var(--color-copy)]"
			>
				// ESTADO: OPERATIVO
			</span>

			<h1
				class="text-4xl md:text-6xl font-extrabold tracking-tight leading-none"
			>
				Recuperando el <span
					class="bg-primary text-surface px-2 border-2 border-copy inline-block"
					>Futuro</span
				> un bit a la vez.
			</h1>

			<div
				class="bg-background p-4 border-2 border-copy shadow-[4px_4px_0px_var(--color-copy)] max-w-lg"
			>
				<p class="text-lg font-bold leading-relaxed">
					No somos basura tecnológica, somos la resistencia. Reparamos,
					instalamos Software Libre y compartimos conocimiento para liberar al
					hardware de la obsolescencia.
				</p>
			</div>

			<div class="flex flex-wrap gap-4 mt-4">
				{#each actionButtons as button}
					<a
						href={button.href}
						class="text-xl font-bold px-8 py-3 border-2 border-copy shadow-[5px_5px_0px_var(--color-copy)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all
                        {button.isPrimary
							? 'bg-primary text-surface active:opacity-80'
							: 'bg-surface text-copy hover:bg-accent hover:text-background active:opacity-80'}"
					>
						{button.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
</style>
