<script>
</script>

<section class="bg-amber-50 p-6 md:p-12 font-mono text-gray-900 overflow-hidden">
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-4 border-black bg-white p-8 md:p-16 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
		
		<!-- Columna Izquierda: El Logotipo CC -->
		<div class="flex justify-center items-center relative group order-2 md:order-1">
            <!-- Decoración de fondo (puntos estilo matriz) -->
            <div class="absolute -inset-4 grid grid-cols-6 gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                {#each Array(24) as _}
                    <div class="w-2 h-2 bg-black rounded-full"></div>
                {/each}
            </div>

            <!-- Bloque del Logo "CC" -->
			<div 
				class="relative bg-pink-600 text-white font-black text-[120px] md:text-[180px] leading-none tracking-tighter px-6 py-2 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[20px_20px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-in-out select-none"
                style="font-family: 'Archivo Black', sans-serif; /* O cualquier fuente ultra-bold que prefieras */"
			>
				CC
                <!-- Glitch effect decorativo sutil en hover -->
                <span class="absolute top-0 left-0 w-full h-full text-cyan-300 opacity-0 group-hover:opacity-70 group-hover:animate-pulse translation-all" aria-hidden="true">CC</span>
			</div>
		</div>

		<!-- Columna Derecha: Texto y CTAs -->
		<div class="flex flex-col gap-6 items-start order-1 md:order-2">
            <!-- Etiqueta superior -->
			<span class="inline-block bg-green-300 text-black text-sm font-bold px-3 py-1 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
				// ESTADO: OPERATIVO
			</span>

			<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
				Recuperando el <span class="bg-cyan-300 px-2 border-2 border-black">Futuro</span> un bit a la vez.
			</h1>

            <!-- Caja de texto descriptivo -->
            <div class="bg-amber-50 p-4 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-lg">
                <p class="text-lg font-bold leading-relaxed">
                    No somos basura tecnológica, somos la resistencia. Reparamos, instalamos Software Libre y compartimos conocimiento para liberar al hardware de la obsolescencia.
                </p>
            </div>

			<!-- Botones de Acción -->
			<div class="flex flex-wrap gap-4 mt-4">
				<a 
					href="/unirse" 
					class="bg-pink-400 text-white text-xl font-bold px-8 py-3 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all active:bg-pink-500"
				>
					Entrar a la Red
				</a>
				<a 
					href="/nodes" 
					class="bg-white text-black text-xl font-bold px-8 py-3 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all hover:bg-yellow-300 active:bg-yellow-400"
				>
					Buscar Nodos
				</a>
			</div>
		</div>

	</div>
</section>

<style>
    /* Importación opcional de una fuente ultra-bold para el logo CC si no usas una por defecto */
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
</style>
