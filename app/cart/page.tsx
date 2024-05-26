import { db } from '@/db/kysely';
import { redirect } from 'next/navigation';
import CartContents from './CartContents';
import retrieveUser from '../lib/retrieveUser';
import retrieveLatestUnfulfilledOrder from '../lib/retrieveLatestUnfulfilledOrder';

export type CartItem = {
  quantity: number;
  name: string;
  img_url: string;
};
export default async function Cart() {
  const user = await retrieveUser();

  if (!user) {
    redirect('/login');
  }
  let items;
  let latestUnfulfilledOrder = await retrieveLatestUnfulfilledOrder(user.id);

  items = await db
    .selectFrom('order_items')
    .innerJoin('orders', 'order_items.order_uuid', 'orders.uuid')
    .innerJoin('items', 'order_items.item_id', 'items.id')
    .select(['order_items.quantity', 'items.name', 'items.img_url'])
    .where('order_uuid', '=', latestUnfulfilledOrder.uuid)
    .execute();

  return (
    <>
      {items.length > 0 ? (
        <CartContents items={items} orderUuid={latestUnfulfilledOrder.uuid} />
      ) : (
        <p>Pop some items into your cart first!</p>
      )}
    </>
  );
}
