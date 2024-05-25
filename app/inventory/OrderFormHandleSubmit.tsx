"use server"
import { db, sql } from "@/db/kysely";
import { v4 as uuidv4 } from "uuid";

export const addToCart = async (itemId: number, formData: FormData) => {
  "use server";
  try {
    await db.schema
      .createTable("orders")
      .ifNotExists()
      .addColumn("uuid", "varchar(255)", (column) => column.primaryKey())
      .addColumn("fulfilled", "boolean", (column) => column.notNull())
      .addColumn("createdAt", sql`timestamp with time zone`, (column) =>
        column.defaultTo(sql`current_timestamp`)
      )
      .execute();

    await db.schema
      .createTable("orderItems")
      .ifNotExists()
      .addColumn("id", "serial", (column) => column.primaryKey())
      .addColumn("order_uuid", "varchar(255)", (column) => {
        return column.references("orders.uuid").notNull();
      })
      .addColumn("item_id", "integer", (column) => {
        return column.references("items.id").notNull();
      })
      .addColumn("quantity", "integer", (column) => column.notNull())
      .execute();

    let orderNo = uuidv4();
    let quantity: any = formData.get('itemQuantity');
    if (!quantity) {
      throw new Error('Quantity invalid');
    }

    await db.insertInto("orders")
    .values({
      uuid: orderNo,
      fulfilled: false
    }).executeTakeFirstOrThrow();

    await db
      .insertInto("orderItems")
      .values({
        order_uuid: orderNo,
        item_id: itemId,
        quantity,
      })
      .executeTakeFirstOrThrow();
  } catch (e: any) {
    throw e;
  }
};
