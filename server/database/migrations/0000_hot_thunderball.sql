CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text DEFAULT '',
	`created_at` text DEFAULT (CURRENT_DATE)
);
