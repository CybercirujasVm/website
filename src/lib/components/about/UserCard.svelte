<script>
  let {
    foto,
    nombre,
    colorNombre = "bg-background border border-border-bento text-copy",
    github,
    descripcion,
  } = $props();
</script>

<!-- Tarjeta principal (Caja Bento) -->
<div
  class="bg-surface p-6 md:p-8 rounded-3xl border border-border-bento shadow-sm flex flex-col items-center text-center justify-between min-w-70 h-full transition-colors hover:border-border-bento-hover"
>
  <div class="flex flex-col items-center">
    <!-- Foto con estilo avatar (borde suave y fondo) -->
    <img
      src={foto}
      alt="Foto de {nombre}"
      class="w-24 h-24 rounded-full border border-border-bento p-1 bg-background object-cover shadow-sm mb-5"
    />

    <!-- Nombre con etiqueta tipo píldora -->
    <h3
      class="text-lg font-bold px-5 py-1.5 rounded-full shadow-sm mb-3 {colorNombre}"
    >
      {nombre}
    </h3>

    <!-- Descripción limpia -->
    <p class="text-sm font-medium text-copy-muted leading-relaxed mt-1">
      {descripcion}
    </p>
  </div>

  <!-- Enlace a GitHub (Sub-caja interactiva) -->
  <a
    href="https://github.com/{github}"
    target="_blank"
    rel="noopener noreferrer"
    class="mt-6 flex items-center justify-center gap-2 w-full bg-background text-copy text-sm font-bold px-5 py-3 rounded-2xl border border-border-bento shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-border-bento-hover active:scale-[0.98] transition-all duration-200"
  >
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
      ><path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      /></svg
    >
    @{github}
  </a>
</div>
