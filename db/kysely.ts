import { Generated, ColumnType } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

interface UserTable {
  id: Generated<number>;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: ColumnType<Date, string | undefined, never>;
}

interface ItemsTable {
  id: Generated<number>;
  name: string;
  description: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}


interface OrdersTable {
  id: Generated<number>;
  user_id: number;
  item_id: number;
  quantity: number;
  createdAt: ColumnType<Date, string | undefined, never>;
}


export interface Database {
  users: UserTable;
  items: ItemsTable;
  orders: OrdersTable;
}

export const db = createKysely<Database>();
export { sql } from "kysely";