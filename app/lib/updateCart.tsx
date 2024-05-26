'use server';

import { db } from '@/db/kysely';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const updateCart = async (orderUuid: string) => {
  'use server';
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    redirect('/login');
  }
  try {
    let items = await db
      .selectFrom('order_items')
      .innerJoin('orders', 'order_items.order_uuid', 'orders.uuid')
      .innerJoin('items', 'order_items.item_id', 'items.id')
      .select(['order_items.quantity', 'items.name', 'items.id'])
      .where('order_uuid', '=', orderUuid)
      .execute();

    return items;
  } catch (e: any) {
    throw e;
  }
};