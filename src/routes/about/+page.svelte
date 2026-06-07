<script>
  import UserCard from "$lib/components/about/UserCard.svelte";

  const listaUsuarios = [
    {
      nombre: "Estela Gómez",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      colorNombre: "bg-primary text-copy-on-primary",
      github: "estela_g",
      descripcion:
        "Docente de primaria. Usa una notebook del 2011 rescatada con Linux Mint para armar las clases de sus alumnos sin renegar.",
    },
    {
      nombre: "Ramiro Paz",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      colorNombre: "bg-background border border-border-bento text-copy",
      github: "ramapaz",
      descripcion:
        "Estudiante técnico. Aprendió a revivir motherboards viejas en los talleres de cirujeo y colabora reparando las máquinas del barrio.",
    },
    {
      nombre: "Lucía Fernández",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      colorNombre: "bg-primary text-copy-on-primary",
      github: "lucia_dev",
      descripcion:
        "Programadora web. Donó su antigua PC de escritorio y ahora testea distros livianas de Linux para optimizar lo que regalamos.",
    },
  ];
</script>

<main
  class="bg-background min-h-screen font-sans text-copy p-4 md:p-8 transition-colors duration-300"
>
  <div class="max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
    <!-- Fila 1: Presentación (Layout Bento de 12 columnas) -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      <!-- Caja Principal: ¿Qué hacemos? -->
      <div
        class="md:col-span-7 flex flex-col justify-center bg-surface p-8 md:p-12 rounded-3xl border border-border-bento shadow-sm transition-colors hover:border-border-bento-hover"
      >
        <h2
          class="text-3xl md:text-4xl font-black text-primary mb-6 tracking-tight"
        >
          ¿Qué hacemos?
        </h2>

        <p
          class="text-lg md:text-xl font-medium leading-relaxed text-copy mb-6"
        >
          En <span
            class="bg-background border border-border-bento px-3 py-1 rounded-xl text-primary font-bold shadow-sm"
            >CyberCirujas</span
          > nos plantamos contra la obsolescencia programada. Nos metemos en el barro
          digital para rescatar computadoras y hardware que el mercado da por "muertos".
        </p>

        <!-- Párrafo secundario en Sub-caja Bento -->
        <div class="p-5 rounded-2xl bg-background border border-border-bento">
          <p class="font-medium text-copy-muted leading-relaxed">
            No tiramos nada: reparamos, optimizamos e instalamos Software Libre
            para devolverle la autonomía tecnológica a las personas.
          </p>
        </div>
      </div>

      <!-- Caja Secundaria: Líneas de Código -->
      <div
        class="md:col-span-5 flex flex-col justify-center bg-surface p-8 md:p-12 rounded-3xl border border-border-bento shadow-sm transition-colors hover:border-border-bento-hover"
      >
        <h3
          class="text-xl font-bold mb-6 text-copy pb-4 border-b border-border-bento"
        >
          Nuestras Líneas de Código
        </h3>

        <ul class="space-y-4">
          <li
            class="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border-bento transition-all hover:border-border-bento-hover hover:shadow-sm"
          >
            <span
              class="text-2xl flex items-center justify-center bg-surface w-12 h-12 rounded-xl border border-border-bento shadow-sm shrink-0"
            >
              ⚡
            </span>
            <div class="flex flex-col justify-center mt-0.5">
              <strong class="text-copy font-bold">Cirujeo Orgánico</strong>
              <span class="text-copy-muted text-sm mt-0.5 leading-snug"
                >Recuperación de hardware descartado.</span
              >
            </div>
          </li>

          <li
            class="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border-bento transition-all hover:border-border-bento-hover hover:shadow-sm"
          >
            <span
              class="text-2xl flex items-center justify-center bg-surface w-12 h-12 rounded-xl border border-border-bento shadow-sm shrink-0"
            >
              🐧
            </span>
            <div class="flex flex-col justify-center mt-0.5">
              <strong class="text-copy font-bold"
                >Evangelización GNU/Linux</strong
              >
              <span class="text-copy-muted text-sm mt-0.5 leading-snug"
                >Software libre como bandera.</span
              >
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Fila 2: Cabecera de Usuarios (Cápsula Bento) -->
    <section
      class="bg-surface px-8 py-6 rounded-3xl border border-border-bento shadow-sm flex items-center justify-center md:justify-start mt-4 transition-colors hover:border-border-bento-hover"
    >
      <h2 class="text-2xl md:text-3xl font-black text-primary tracking-tight">
        ¿Para quiénes lo hacemos?
      </h2>
    </section>

    <!-- Fila 3: Grilla de Tarjetas de Usuario -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {#each listaUsuarios as usuario (usuario.github)}
        <UserCard
          nombre={usuario.nombre}
          foto={usuario.foto}
          colorNombre={usuario.colorNombre}
          github={usuario.github}
          descripcion={usuario.descripcion}
        />
      {/each}
    </section>
  </div>
</main>
