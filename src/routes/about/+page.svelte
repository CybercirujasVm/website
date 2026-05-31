<script>
    import TarjetaUsuario from "$lib/about/TarjetaUsuario.svelte";

    // Declaramos la lista de usuarios usando tus nuevos colores de Tailwind Config
    const listaUsuarios = [
        {
            nombre: "Estela Gómez",
            foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
            colorNombre: "bg-cyber-green text-cyber-dark", // Fósforo Verde
            github: "estela_g",
            descripcion: "Docente de primaria. Usa una notebook del 2011 rescatada con Linux Mint para armar las clases de sus alumnos sin renegar."
        },
        {
            nombre: "Ramiro Paz",
            foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
            colorNombre: "bg-cyber-amber text-cyber-dark", // Fósforo Ámbar
            github: "ramapaz",
            descripcion: "Estudiante técnico. Aprendió a revivir motherboards viejas en los talleres de cirujeo y colabora reparando las máquinas del barrio."
        },
        {
            nombre: "Lucía Fernández",
            foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
            colorNombre: "bg-cyber-green text-cyber-dark", // Fósforo Verde otra vez para alternar
            github: "lucia_dev",
            descripcion: "Programadora web. Donó su antigua PC de escritorio y ahora testea distros livianas de Linux para optimizar lo que regalamos."
        }
    ];
</script>



<main class="bg-amber-50 min-h-screen font-mono text-gray-900 px-4 py-12">
    <div class="max-w-5xl mx-auto space-y-16">
        
        <!-- SECCIÓN 1: BREVE DESCRIPCIÓN DE LO QUE HACEMOS -->
        <section class="space-y-6">
            <div class="inline-block bg-cyber-green text-cyber-dark text-2xl md:text-3xl font-black px-4 py-2 border-4 border-cyber-dark shadow-[6px_6px_0px_rgba(12,12,12,1)]">
                <h2>¿Qué hacemos?</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div class="bg-white p-6 md:p-8 border-4 border-cyber-dark shadow-[6px_6px_0px_rgba(12,12,12,1)] flex flex-col justify-between gap-4">
                    <p class="text-lg font-bold leading-relaxed">
                        En <span class="bg-cyber-amber/30 px-1">CyberCirujas</span> nos plantamos contra la obsolescencia programada. Nos metemos en el barro digital para rescatar computadoras y hardware que el mercado da por "muertos".
                    </p>
                    <p class="font-medium text-cyber-gray">
                        No tiramos nada: reparamos, optimizamos e instalamos Software Libre para devolverle la autonomía tecnológica a las personas.
                    </p>
                </div>

                <div class="bg-white p-6 border-4 border-cyber-dark shadow-[6px_6px_0px_rgba(12,12,12,1)] flex flex-col justify-between">
                    <h3 class="text-xl font-black mb-4 underline decoration-2 text-cyber-dark">Nuestras Líneas de Código:</h3>
                    <ul class="space-y-3 font-bold text-sm md:text-base text-cyber-gray">
                        <li class="flex items-start gap-2"><span>⚡</span> <span><strong>Cirujeo Orgánico:</strong> Recuperación de hardware.</span></li>
                        <li class="flex items-start gap-2"><span>🐧</span> <span><strong>Evangelización GNU/Linux:</strong> Software libre como bandera.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: NUESTROS USUARIOS -->
        <section class="space-y-6">
            <div class="inline-block bg-cyber-amber text-cyber-dark text-2xl md:text-3xl font-black px-4 py-2 border-4 border-cyber-dark shadow-[6px_6px_0px_rgba(12,12,12,1)]">
                <h2>¿Para quiénes lo hacemos?</h2>
            </div>

            <!-- Contenedor Grid donde inyectamos las tarjetas de forma limpia -->
            <div class="gap-8 pt-6">
                <!-- En tu sección 2 de AboutUs.svelte cambia la línea del each por esta: -->

                <div class="flex  gap-8 pt-6">
                    {#each listaUsuarios as usuario (usuario.github)}
                        <TarjetaUsuario
                            nombre={usuario.nombre}
                            foto={usuario.foto}
                            colorNombre={usuario.colorNombre}
                            github={usuario.github}
                            descripcion={usuario.descripcion}
                        />
                    {/each}
                </div>
            </div>
        </section>

    </div>
</main>