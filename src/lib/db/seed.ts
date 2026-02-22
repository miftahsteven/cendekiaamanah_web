import "dotenv/config";
import { db } from "./index";
import { units, users } from "./schema";
import bcrypt from "bcryptjs";

const seedUnits = [
  { name: "Madrasah Diniyah", abbreviation: "MD", slug: "diniyah" },
  { name: "SMP Cendekia Amanah", abbreviation: "SMP", slug: "smp" },
  { name: "SMA Cendekia Amanah", abbreviation: "SMA", slug: "sma" },
  { name: "Hidroponik", abbreviation: "HPK", slug: "hidroponik" },
  { name: "Koperasi", abbreviation: "KOP", slug: "koperasi" },
];

async function seed() {
  console.log("🌱 Starting database seed...");

  try {
    // Seed units
    console.log("📚 Seeding units...");
    for (const unit of seedUnits) {
      await db
        .insert(units)
        .values({
          name: unit.name,
          abbreviation: unit.abbreviation,
          slug: unit.slug,
          description: `Unit ${unit.name} - Cendekia Amanah`,
        })
        .onConflictDoNothing();
    }
    console.log("✅ Units seeded successfully!");

    // Seed default admin user
    console.log("👤 Creating admin user...");
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await db
      .insert(users)
      .values({
        name: "Admin",
        email: "admin@cendekiaamanah.id",
        password: hashedPassword,
        role: "admin",
      })
      .onConflictDoNothing();
    console.log("✅ Admin user created!");
    console.log("   Email: admin@cendekiaamanah.id");
    console.log("   Password: admin123");

    console.log("\n🎉 Database seeding completed!");
  } catch (error) {
    console.error("❌ Seed error:", error);
    throw error;
  }

  process.exit(0);
}

seed();
