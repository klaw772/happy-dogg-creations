import { db, sql } from '@/db/kysely';
import "dotenv/config";


export const seedItems = async () => {
const createItemTable = await db.schema
    .createTable("items")
    .ifNotExists()
    .addColumn("id", "serial", (column) => column.primaryKey())
    .addColumn("name", "varchar(255)", (column) => column.notNull().unique())
    .addColumn("description", "varchar(255)", (column) => column.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (column) =>
      column.defaultTo(sql`current_timestamp`)
    )
    .execute();
  console.log(`Created "items" table`);
  const addItems = await db
    .insertInto("items")
    .values([
      {
        name: "Test Item 1",
        description: "a delightful item",
      },
      {
        name: "Test Item 2",
        description: "another delightful item",
      },
      {
        name: "Test Item 3",
        description: "a third delightful item",
      },
    ])
    .execute();
    console.log("items table seeded");
  return {
    createItemTable,
    addItems
  }
}
