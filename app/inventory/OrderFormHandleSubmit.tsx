'use server';
import { db } from '@/db/kysely';
import { redirect } from 'next/navigation';
import retrieveUser from '../lib/retrieveUser';
import retrieveLatestUnfulfilledOrder from '../lib/retrieveLatestUnfulfilledOrder';
import { revalidatePath } from 'next/cache';

export const addOrAdjustCart = async (
  itemId: number,
  operation: string,
  formData: FormData
) => {
  'use server';
  const user = await retrieveUser();

  if (!user) {
    redirect('/login');
  }
  try {
    let quantity: any = formData.get('itemQuantity');
    if (!quantity || quantity < 0) {
      throw new Error('Quantity invalid');
    }

    let latestUnfulfilledOrder = await retrieveLatestUnfulfilledOrder(user.id);

    let orderItemPresence = await db
      .selectFrom('order_items')
      .select('id')
      .where('order_uuid', '=', latestUnfulfilledOrder.uuid)
      .where('item_id', '=', itemId)
      .executeTakeFirst();

    if (!orderItemPresence) {
      await db
        .insertInto('order_items')
        .values({
          order_uuid: latestUnfulfilledOrder.uuid,
          item_id: itemId,
          quantity,
        })
        .returning('order_uuid')
        .executeTakeFirstOrThrow();
    } else {
      let prevQuantity = await db
        .selectFrom('order_items')
        .select('order_items.quantity')
        .where('id', '=', orderItemPresence.id)
        .executeTakeFirst();

      let res;
      if (operation === 'ADD') {
        res = await db
          .updateTable('order_items')
          .set({ quantity: Number(prevQuantity?.quantity) + Number(quantity) })
          .where('id', '=', orderItemPresence.id)
          .returning('order_uuid')
          .executeTakeFirstOrThrow();
      } else if (operation === 'EDIT') {
        res = await db
          .updateTable('order_items')
          .set({
            quantity: Number(quantity),
          })
          .where('id', '=', orderItemPresence.id)
          .returning('order_uuid')
          .executeTakeFirstOrThrow();
      }
    }
    revalidatePath('/cart');

    return true;
  } catch (e: any) {
    return false;
  }
};
