"use server";
import { db } from "@/db/kysely";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const handleCheckout = async (orderUuid: string) => {
  "use server";
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    redirect("/login");
  }
  try {
    await db
      .updateTable('orders')
      .set({fulfilled: true})
      .where('uuid', '=', orderUuid)
      .executeTakeFirstOrThrow()
    
    redirect("/")
  } catch (e: any) {
    throw e;
  }
};
