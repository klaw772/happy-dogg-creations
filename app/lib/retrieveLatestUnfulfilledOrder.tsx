import { db } from '@/db/kysely';
import { v4 as uuidv4 } from 'uuid';

export default async function retrieveLatestUnfulfilledOrder(userId: number) {
  'use server';
  let latestUnfulfilledOrder;
  try {
    latestUnfulfilledOrder = await db
      .selectFrom('orders')
      .select('orders.uuid')
      .where('fulfilled', '=', false)
      .where('user_id', '=', userId)
      .orderBy('created_at desc')
      .limit(1)
      .executeTakeFirst();

    if (!latestUnfulfilledOrder) {
      let orderNo = uuidv4();
      await db
        .insertInto('orders')
        .values({
          user_id: userId,
          uuid: orderNo,
          fulfilled: false,
        })
        .executeTakeFirstOrThrow();
      latestUnfulfilledOrder = { uuid: orderNo };
    }

    return latestUnfulfilledOrder;
  } catch (e) {
    throw e;
  }
}
