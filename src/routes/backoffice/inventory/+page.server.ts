import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: inventory, error } = await supabase
		.from('inventory')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		return { inventory: [], error: error.message };
	}

	return { inventory };
};

export const actions = {
	add: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const name = formData.get('name') as string;
		const quantity = parseInt(formData.get('quantity') as string);
		const detailsString = formData.get('details') as string;

		let details;
		try {
			details = JSON.parse(detailsString || '{}');
		} catch (err) {
			return fail(400, { error: 'Failed to parse specifications. Invalid JSON format.' });
		}

		const { error } = await supabase
			.from('inventory')
			.insert([{ name, quantity, details }]);

		if (error) {
			if (error.code === '23505') {
				return fail(400, { error: `The item "${name}" already exists in the inventory.` });
			}
			return fail(500, { error: 'Database error: ' + error.message });
		}

		return { success: true };
	},
	delete: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		if (!id) {
			return fail(400, { error: 'Item ID is missing.' });
		}

		const { error } = await supabase
			.from('inventory')
			.delete()
			.eq('id', id);

		if (error) {
			return fail(500, { error: 'Failed to delete item: ' + error.message });
		}

		return { success: true, action: 'delete' };
	}
} satisfies Actions;
