import { date, pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const views = pgTable('views', {
	id: serial('id').primaryKey(),
	name: text('name').unique(),
	views: integer('views').default(0)
});

export const guestbook = pgTable('guestbook', {
	id: serial('id').primaryKey(),
	created_date: date('created-date').notNull(),
	name: text('name').notNull(),
	message: text('message').notNull()
});
