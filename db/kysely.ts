import { Generated, ColumnType } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

interface ItemsTable {
  id: Generated<number>;
  name: string;
  description: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}

interface OrderItemsTable {
  id: Generated<number>;
  order_uuid: string;
  item_id: number;
  quantity: number;
}

interface OrdersTable {
  uuid: string;
  fulfilled: boolean;
  createdAt: ColumnType<Date, string | undefined, never>;
}


export interface Database {
  items: ItemsTable;
  orderItems: OrderItemsTable;
  orders: OrdersTable;
}

export const db = createKysely<Database>();
export { sql } from "kysely";