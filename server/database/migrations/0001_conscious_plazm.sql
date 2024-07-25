CREATE TABLE `words` (
	`id` integer PRIMARY KEY NOT NULL,
	`word` text DEFAULT '',
	`translation` text DEFAULT '',
	`created_at` text DEFAULT (CURRENT_DATE)
);
--> statement-breakpoint
ALTER TABLE `users` RENAME TO `verbs`;--> statement-breakpoint
ALTER TABLE `verbs` RENAME COLUMN `name` TO `verb`;--> statement-breakpoint
ALTER TABLE `verbs` ADD `translation` text DEFAULT '';--> statement-breakpoint
ALTER TABLE `verbs` ADD `type` text;