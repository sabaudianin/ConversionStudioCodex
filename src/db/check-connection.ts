import { sql } from "drizzle-orm";
import { getDb } from ".";

async function main() {
  const db = getDb();
  const result = await db.execute(sql`select now() as now`);

  console.log("Database connection OK");
  console.log(result.rows[0]);
}

main().catch((error) => {
  console.error("Database connection failed");
  console.error(error);
  process.exit(1);
});
