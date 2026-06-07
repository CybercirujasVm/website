<script lang="ts">
  let { form } = $props();
</script>

<h1>Acceso al Backoffice</h1>

<form method="POST" action="?/login">
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <label>
    Contraseña:
    <input type="password" name="password" required />
  </label>
  <button type="submit">Entrar</button>
</form>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}
