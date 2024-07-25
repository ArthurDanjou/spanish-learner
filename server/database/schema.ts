import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').default(''),
  createdAt: text('created_at').default(sql`(CURRENT_DATE)`),
})
