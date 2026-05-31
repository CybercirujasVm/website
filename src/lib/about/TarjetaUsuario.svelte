<!-- TarjetaUsuario.svelte -->
<script>
    // En Svelte 5 recibimos las propiedades mediante $props()
    // Cambiamos el color por defecto al verde fósforo del archivo de configuración
    let { 
        foto, 
        nombre, 
        colorNombre = 'bg-cyber-green text-cyber-dark', 
        github, 
        descripcion 
    } = $props();
</script>

<!-- Usamos cyber-dark para los bordes gruesos y las sombras duras -->
<div class="bg-white p-6 border-4 border-cyber-dark shadow-[6px_6px_0px_rgba(12,12,12,1)] flex flex-col items-center text-center justify-between min-w-70">
    <div class="flex flex-col items-center">
        <!-- Foto con borde utilizando cyber-dark -->
        <img 
            src={foto} 
            alt="Foto de {nombre}" 
            class="w-24 h-24 rounded-full border-4 border-cyber-dark object-cover shadow-[3px_3px_0px_rgba(12,12,12,1)] mb-4"
        />
        
        <!-- Nombre con etiqueta usando borde cyber-dark y color dinámico -->
        <h3 class="text-xl font-black px-2 py-0.5 border-2 border-cyber-dark shadow-[2px_2px_0px_rgba(12,12,12,1)] mb-2 {colorNombre}">
            {nombre}
        </h3>
        
        <!-- Descripción / Párrafo utilizando cyber-gray para un texto sutil pero legible -->
        <p class="text-sm font-bold text-cyber-gray leading-relaxed mt-2">
            {descripcion}
        </p>
    </div>

    <!-- Enlace a GitHub con el fondo ámbar de tu configuración -->
    <a 
        href="https://github.com/{github}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="mt-4 inline-flex items-center gap-2 bg-cyber-amber text-cyber-dark text-xs font-black px-3 py-1.5 border-2 border-cyber-dark shadow-[3px_3px_0px_rgba(12,12,12,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
    >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        @{github}
    </a>
</div>