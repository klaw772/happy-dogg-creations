"use server"
import { db, sql } from "@/db/kysely";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";


export const addToCart = async (itemId: number, orderUuid: string, formData: FormData) => {
  "use server";
  const session = await getServerSession();
  console.log(session)
  // try {
  //   await db.schema
  //     .createTable("orders")
  //     .ifNotExists()
  //     .addColumn("uuid", "varchar(255)", (column) => column.primaryKey())
  //     .addColumn("fulfilled", "boolean", (column) => column.notNull())
  //     .addColumn("user_id", "integer", (column) => {
  //       return column.references("users.id").notNull();
  //     })
  //     .addColumn("createdAt", sql`timestamp with time zone`, (column) =>
  //       column.defaultTo(sql`current_timestamp`)
  //     )
  //     .execute();

  //   await db.schema
  //     .createTable("order_items")
  //     .ifNotExists()
  //     .addColumn("id", "serial", (column) => column.primaryKey())
  //     .addColumn("order_uuid", "varchar(255)", (column) => {
  //       return column.references("orders.uuid").notNull();
  //     })
  //     .addColumn("item_id", "integer", (column) => {
  //       return column.references("items.id").notNull();
  //     })
  //     .addColumn("quantity", "integer", (column) => column.notNull())
  //     .execute();

  //   let quantity: any = formData.get('itemQuantity');
  //   if (!quantity) {
  //     throw new Error('Quantity invalid');
  //   }

  //   const orderPresenceResult = await db
  //   .selectFrom('orders')
  //   .selectAll()
  //   .where('uuid', '=', orderUuid)
  //   .executeTakeFirst()

  //   if (!orderPresenceResult?.uuid) {
  //     await db
  //       .insertInto("orders")
  //       .values({
  //         uuid: orderUuid,
  //         fulfilled: false,
  //       })
  //       .executeTakeFirstOrThrow();
  //   }

  //   await db
  //     .insertInto("order_items")
  //     .values({
  //       order_uuid: orderUuid,
  //       item_id: itemId,
  //       quantity,
  //     })
  //     .executeTakeFirstOrThrow();
  // } catch (e: any) {
  //   throw e;
  // }
};
