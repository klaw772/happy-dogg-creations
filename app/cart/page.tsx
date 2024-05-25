
import { db, sql } from "@/db/kysely";


export default async function Cart() {
  // const order = localStorage.getItem('order');
  //   try {
  //   await db.schema
  //     .createTable("orders")
  //     .ifNotExists()
  //     .addColumn("uuid", "varchar(255)", (column) => column.primaryKey())
  //     .addColumn("fulfilled", "boolean", (column) => column.notNull())
  //     .addColumn("createdAt", sql`timestamp with time zone`, (column) =>
  //       column.defaultTo(sql`current_timestamp`)
  //     )
  //     .execute();
  //   } catch (e) {
  //     throw e;
  //   }
  return (
    <div>
       Cart
    </div>
  )
}