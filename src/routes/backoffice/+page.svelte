<script lang="ts">
	let { data } = $props();
</script>

<h1>Bienvenido al Backoffice</h1>
<p>Has iniciado sesión como: {data.user?.email}</p>
