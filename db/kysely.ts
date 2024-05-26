import { Generated, ColumnType } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";


interface UsersTable {
  id: Generated<number>;
  email: string;
  password: string;
}
interface ItemsTable {
  id: Generated<number>;
  name: string;
  description: string;
  img_url: string;
  created_at: ColumnType<Date, string | undefined, never>;
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
  user_id: number;
  created_at: ColumnType<Date, string | undefined, never>;
}

export interface Database {
  users: UsersTable;
  items: ItemsTable;
  order_items: OrderItemsTable;
  orders: OrdersTable;
}

export const db = createKysely<Database>();
export { sql } from "kysely";