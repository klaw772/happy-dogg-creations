import { redirect } from 'next/navigation';
import CartContents from './CartContents';
import retrieveUser from '../lib/retrieveUser';
import retrieveLatestUnfulfilledOrder from '../lib/retrieveLatestUnfulfilledOrder';
import { updateCart } from '../lib/updateCart';

export type CartItem = {
  id: number;
  quantity: number;
  name: string;
  img_url: string;
};
export default async function Cart() {
  const user = await retrieveUser();

  if (!user) {
    redirect('/login');
  }
  let items: CartItem[];
  let latestUnfulfilledOrder = await retrieveLatestUnfulfilledOrder(user.id);

  items = await updateCart(latestUnfulfilledOrder.uuid);
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
