<script lang="ts">
  import { enhance } from "$app/forms";
  import Add from "$lib/components/inventory/Add.svelte";

  let { data, form } = $props();
  let showForm = $state(false);
</script>

<div class="max-w-6xl mx-auto my-10 p-6">
  <div class="flex justify-between items-center mb-8">
    <div>
      <h1 class="text-3xl font-bold text-copy">Inventory Dashboard</h1>
      <p class="text-copy-muted text-sm mt-1">
        Manage system components and hardware assets.
      </p>
    </div>

    {#if !showForm}
      <button
        type="button"
        onclick={() => (showForm = true)}
        class="py-2 px-4 text-sm font-medium rounded-md text-surface bg-primary hover:opacity-90 transition-opacity shadow-sm"
      >
        + Add Asset
      </button>
    {/if}
  </div>

  {#if form?.error && form?.action === "delete"}
    <div
      class="mb-6 p-4 rounded bg-background border border-red-500 text-red-600"
    >
      {form.error}
    </div>
  {/if}
  {#if form?.success && form?.action === "delete"}
    <div class="mb-6 p-4 rounded bg-surface border border-accent text-accent">
      Item successfully deleted.
    </div>
  {/if}

  {#if showForm}
    <div class="mb-8">
      <Add {form} onClose={() => (showForm = false)} />
    </div>
  {/if}

  <div
    class="bg-surface rounded-lg shadow-md border border-copy-muted/20 overflow-hidden"
  >
    <table class="min-w-full divide-y divide-copy-muted/20">
      <thead class="bg-background">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-copy uppercase tracking-wider"
            >Item Name</th
          >
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-copy uppercase tracking-wider"
            >Quantity</th
          >
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-copy uppercase tracking-wider"
            >Specifications</th
          >
          <th
            class="px-6 py-3 text-right text-xs font-semibold text-copy uppercase tracking-wider"
            >Actions</th
          >
        </tr>
      </thead>
      <tbody class="divide-y divide-copy-muted/20 bg-surface text-copy">
        {#if data.inventory && data.inventory.length > 0}
          {#each data.inventory as item}
            <tr class="hover:bg-background/50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium"
                >{item.name}</td
              >
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 py-1 text-xs font-semibold rounded-full bg-background border border-copy-muted/30"
                >
                  {item.quantity} units
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-copy-muted">
                <div class="flex flex-wrap gap-2">
                  {#each Object.entries(item.details || {}) as [key, value]}
                    <span
                      class="bg-background px-2 py-0.5 rounded text-xs border border-copy-muted/10"
                    >
                      <strong class="text-copy font-mono">{key}:</strong>
                      {value}
                    </span>
                  {/each}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                <form
                  method="POST"
                  action="?/delete"
                  use:enhance={({ cancel }) => {
                    const isConfirmed = confirm(
                      `Warning: Are you sure you want to delete "${item.name}"? This action cannot be undone.`,
                    );

                    if (!isConfirmed) {
                      cancel();
                    }

                    return async ({ update }) => {
                      await update();
                    };
                  }}
                >
                  <input type="hidden" name="id" value={item.id} />
                  <button
                    type="submit"
                    class="text-danger hover:text-danger-500 font-medium transition-colors p-2"
                    title="Delete item"
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          {/each}
        {:else}
          <tr>
            <td colspan="4" class="px-6 py-10 text-center text-copy-muted">
              No hardware items registered yet. Click "+ Add Asset" to insert
              the first record.
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
