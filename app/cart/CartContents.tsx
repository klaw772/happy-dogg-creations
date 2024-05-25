import { db } from "@/db/kysely";
import { Item } from "../inventory/page";


export interface CartContentProps {
  orderUuid: string;
}


export default async function CartContents(props: CartContentProps) {
  let orderItems: Item[];
  try {
    orderItems = await db
      .selectFrom("items").selectAll().execute();
  } catch (e: any) {
      throw e;
    }
  

  return(
    <div>hiya</div>
  )
}