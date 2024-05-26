"use server"
import { db } from "@/db/kysely";
import { redirect } from "next/navigation";
import retrieveUser from "../lib/retrieveUser";
import retrieveLatestUnfulfilledOrder from "../lib/retrieveLatestUnfulfilledOrder";


export const addToCart = async (itemId: number, formData: FormData) => {
  "use server";
  const user = await retrieveUser();

  if (!user) {
    redirect("/login");
  }
  try {
    let quantity: any = formData.get('itemQuantity');
    if (!quantity) {
      throw new Error('Quantity invalid');
    }

    let latestUnfulfilledOrder = await retrieveLatestUnfulfilledOrder(
      user.id
    );

    await db
      .insertInto("order_items")
      .values({
        order_uuid: latestUnfulfilledOrder.uuid,
        item_id: itemId,
        quantity,
      })
      .executeTakeFirstOrThrow();
  } catch (e: any) {
    throw e;

  }
};
