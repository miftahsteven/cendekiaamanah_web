import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
  pgSchema
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const appSchema = pgSchema("drizzle");

// Units table - immutable, pre-seeded with 5 units
export const units = appSchema.table("units", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  abbreviation: varchar("abbreviation", { length: 20 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Users table for admin authentication
export const users = appSchema.table("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 20 }).default("admin").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// News table with unit reference
export const news = appSchema.table("news", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  image: varchar("image", { length: 500 }),
  unitId: integer("unit_id").references(() => units.id), // null means "Umum"
  authorId: integer("author_id").references(() => users.id),
  isPublished: boolean("is_published").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Gallery table with unit reference
export const gallery = appSchema.table("gallery", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  image: varchar("image", { length: 500 }).notNull(),
  unitId: integer("unit_id").references(() => units.id), // null means "Umum"
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Carousel items for homepage
export const carouselItems = appSchema.table("carousel_items", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }),
  subtitle: varchar("subtitle", { length: 255 }),
  image: varchar("image", { length: 500 }).notNull(),
  link: varchar("link", { length: 500 }),
  buttonText: varchar("button_text", { length: 50 }).default("selengkapnya"),
  order: integer("order").default(0).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const unitsRelations = relations(units, ({ many }) => ({
  news: many(news),
  gallery: many(gallery),
}));

export const newsRelations = relations(news, ({ one }) => ({
  unit: one(units, {
    fields: [news.unitId],
    references: [units.id],
  }),
  author: one(users, {
    fields: [news.authorId],
    references: [users.id],
  }),
}));

export const galleryRelations = relations(gallery, ({ one }) => ({
  unit: one(units, {
    fields: [gallery.unitId],
    references: [units.id],
  }),
}));

// Type exports
export type Unit = typeof units.$inferSelect;
export type NewUnit = typeof units.$inferInsert;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type News = typeof news.$inferSelect;
export type NewNews = typeof news.$inferInsert;

export type Gallery = typeof gallery.$inferSelect;
export type NewGallery = typeof gallery.$inferInsert;

export type CarouselItem = typeof carouselItems.$inferSelect;
export type NewCarouselItem = typeof carouselItems.$inferInsert;
