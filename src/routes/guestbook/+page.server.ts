import { db } from '$lib/server/db';
import { guestbook } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { Actions } from '../$types';
import { desc } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const getGuestbookMessages = async () => {
		return await db
			.select({
				name: guestbook.name,
				message: guestbook.message,
				createdDate: guestbook.created_date
			})
			.from(guestbook)
			.orderBy(desc(guestbook.created_date));
	};

	return {
		messages: await getGuestbookMessages()
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data?.get('name') as string;
		const message = data?.get('message') as string;
		const createdDate = new Date().toISOString();

		if (!name.trim() || name.length > 50) {
			return fail(400, { name, invalid: true });
		} else if (!message.trim() || message.length > 100) {
			return fail(400, { message, invalid: true });
		}

		const addMessage = await db
			.insert(guestbook)
			.values({ name, message, created_date: createdDate })
			.returning();

		if (addMessage.length === 0) {
			return {
				submitted: true,
				success: false
			};
		}

		return {
			submitted: true,
			success: true
		};
	}
} satisfies Actions;
