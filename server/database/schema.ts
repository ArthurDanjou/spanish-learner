import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const verbs = sqliteTable('verbs', {
  id: integer('id').primaryKey(),
  verb: text('verb').default(''),
  type: text('type', { enum: ['-ar', '-er', '-ir'] }),
  translation: text('translation').default(''),
  createdAt: text('created_at').default(sql`(CURRENT_DATE)`),
})

export const words = sqliteTable('words', {
  id: integer('id').primaryKey(),
  word: text('word').default(''),
  type: text('type').default(''),
  translation: text('translation').default(''),
  createdAt: text('created_at').default(sql`(CURRENT_DATE)`),
})
