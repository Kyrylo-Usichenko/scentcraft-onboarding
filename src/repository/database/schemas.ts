import { pgTable, text } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('Users', {
	id: text('id').primaryKey(),
	Gender: text('Gender'),
	Time: text('Time'),
	Mode: text('Mode'),
});
