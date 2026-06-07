<script lang="ts">
  import { enhance } from "$app/forms";

  let { form, onClose } = $props<{
    form: any;
    onClose: () => void;
  }>();

  let isSubmitting = $state(false);
  let name = $state("");
  let quantity = $state(1);
  let details = $state([{ key: "", value: "" }]);

  const addDetail = () => {
    details.push({ key: "", value: "" });
  };

  const removeDetail = (index: number) => {
    details.splice(index, 1);
  };
</script>

<div
  class="p-6 bg-surface rounded-lg shadow-md border border-copy-muted/20"
>
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-2xl font-bold text-copy">Add New Item</h2>
    <button
      type="button"
      onclick={onClose}
      class="text-sm px-3 py-1 text-copy-muted hover:text-copy transition"
    >
      Cancel
    </button>
  </div>

  <form
    method="POST"
    action="?/add"
    class="space-y-6"
    use:enhance={({ formData }) => {
      isSubmitting = true;

      const detailsObj = details.reduce(
        (acc, curr) => {
          if (curr.key.trim() !== "") {
            acc[curr.key.trim()] = curr.value.trim();
          }
          return acc;
        },
        {} as Record<string, string>,
      );

      formData.set("details", JSON.stringify(detailsObj));

      return async ({ update }) => {
        await update({ reset: true });
        isSubmitting = false;
        if (form?.success) {
          name = "";
          quantity = 1;
          details = [{ key: "", value: "" }];
          onClose();
        }
      };
    }}
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2">
        <label for="name" class="block text-sm font-medium text-copy"
          >Equipment or Component</label
        >
        <input
          type="text"
          id="name"
          name="name"
          bind:value={name}
          required
          class="mt-1 block w-full rounded-md border-copy-muted/30 bg-surface text-copy shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label for="quantity" class="block text-sm font-medium text-copy"
          >Quantity</label
        >
        <input
          type="number"
          id="quantity"
          name="quantity"
          bind:value={quantity}
          min="0"
          required
          class="mt-1 block w-full rounded-md border-copy-muted/30 bg-surface text-copy shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>
    </div>

    <div class="border-t border-copy-muted/20 pt-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-copy">
          Technical Specifications
        </h3>
        <button
          type="button"
          onclick={addDetail}
          class="text-sm px-3 py-1 bg-background border border-copy-muted/30 text-copy rounded hover:opacity-80 transition"
        >
          + Add Field
        </button>
      </div>

      <div class="space-y-3">
        {#each details as detail, index}
          <div class="flex items-center gap-3">
            <input
              type="text"
              placeholder="Key"
              bind:value={detail.key}
              class="block w-1/3 rounded-md border-copy-muted/30 bg-surface text-copy shadow-sm focus:border-primary focus:ring-primary text-sm font-mono"
            />
            <span class="text-copy-muted font-bold">:</span>
            <input
              type="text"
              placeholder="Value"
              bind:value={detail.value}
              class="block w-full rounded-md border-copy-muted/30 bg-surface text-copy shadow-sm focus:border-primary focus:ring-primary text-sm"
            />
            <button
              aria-label="remove"
              type="button"
              onclick={() => removeDetail(index)}
              class="text-copy-muted hover:text-copy p-2 transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                /></svg
              >
            </button>
          </div>
        {/each}
      </div>
    </div>

    <div
      class="pt-4 flex items-center justify-between border-t border-copy-muted/20"
    >
      <div class="flex-1 mr-4">
        {#if form?.error}
          <p
            class="text-sm text-copy bg-background p-2 rounded border border-primary"
          >
            {form.error}
          </p>
        {/if}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        class="py-2 px-6 text-sm font-medium rounded-md text-surface bg-primary hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {isSubmitting ? "Saving..." : "Save to Inventory"}
      </button>
    </div>
  </form>
</div>
