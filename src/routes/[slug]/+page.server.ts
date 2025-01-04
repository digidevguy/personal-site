import { db } from '$lib/server/db';
import { views } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const getViews = async () => {
		return await db.select({ views: views.views }).from(views).where(eq(views.name, params.slug));
	};

	await db
		.insert(views)
		.values({ name: params.slug, views: 1 })
		.onConflictDoUpdate({ target: views.name, set: { views: sql`${views.views} + 1` } });

	return {
		views: await getViews()
	};
};
