CREATE SCHEMA IF NOT EXISTS "drizzle";
--> statement-breakpoint
CREATE TABLE "drizzle"."carousel_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"subtitle" varchar(255),
	"image" varchar(500) NOT NULL,
	"link" varchar(500),
	"button_text" varchar(50) DEFAULT 'selengkapnya',
	"order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "drizzle"."gallery" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"image" varchar(500) NOT NULL,
	"unit_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "drizzle"."news" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"excerpt" text,
	"content" text NOT NULL,
	"image" varchar(500),
	"unit_id" integer,
	"author_id" integer,
	"is_published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "news_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "drizzle"."units" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"abbreviation" varchar(20) NOT NULL,
	"slug" varchar(100) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "units_name_unique" UNIQUE("name"),
	CONSTRAINT "units_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "drizzle"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(20) DEFAULT 'admin' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "drizzle"."gallery" ADD CONSTRAINT "gallery_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "drizzle"."units"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "drizzle"."news" ADD CONSTRAINT "news_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "drizzle"."units"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "drizzle"."news" ADD CONSTRAINT "news_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "drizzle"."users"("id") ON DELETE no action ON UPDATE no action;