import { db, sql } from '@/db/kysely';
import bcrypt from 'bcrypt';
import "dotenv/config";


export const seedUsers = async () => {
  const createUserTable = await db.schema
    .createTable("users")
    .ifNotExists()
    .addColumn("id", "serial", (column) => column.primaryKey())
    .addColumn("name", "varchar(255)", (column) => column.notNull())
    .addColumn("email", "varchar(255)", (column) => column.notNull().unique())
    .addColumn("password", "varchar(255)", (column) => column.notNull())
    .addColumn("role", "varchar(255)", (column) => column.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (column) =>
      column.defaultTo(sql`current_timestamp`)
    )
    .execute();
  console.log(`Created "users" table`);
  
  let passHash: string;
  if (process.env.SEED_PASS_1) {
    passHash = process.env.SEED_PASS_1;
  } else {
    throw new Error('env variable not defined')
  }
  const hashedpass1 = await bcrypt.hash(passHash, 5);

  const addUsers = await db.insertInto("users").values([
    {
      name: "Test User 1",
      email: "test@test.com",
      password: hashedpass1,
      role: "admin",
    },
    {
      name: "Test User 2",
      email: "test2@test.com",
      password: hashedpass1,
      role: "admin",
    },
    {
      name: "Test User 3",
      email: "test3@test.com",
      password: hashedpass1,
      role: "user",
    },
  ]).execute();
  console.log("users table seeded")
  return {
    createUserTable,
    addUsers,
  }
}
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
