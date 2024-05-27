'use client';

import { Button, Card, List } from 'flowbite-react';
import { handleCheckout } from './HandleCheckout';
import { CartItem } from './page';
import { useEffect, useState } from 'react';
import { updateCart } from '../lib/updateCart';
import EditCartItemModal from './EditCartItemModal';

export interface CartContentsProps {
  items: CartItem[];
  orderUuid: string;
}
export default function CartContents(props: CartContentsProps) {
  const [itemList, setItemList] = useState(props.items)
  const [openModal, setOpenModal] = useState(false);


  let updateItems = async () => {
    const res = await updateCart(props.orderUuid);
    setItemList(res);
  }
  useEffect(() => {
    updateItems();
  }, [])
  return (
    <div>
      <p className='mb-5 text-3xl text-center'>Cart</p>
      <p className='mb-3 text-center'>
        It&apos;s all free! Because who doesn&apos;t like spoiling pets?
      </p>
        {itemList.map((item) => (
          <Card
            key={item.name}
            className='min-w-20 mb-3'
            imgSrc={item.img_url}
            horizontal
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {item.name} x {item.quantity}
            </h5>
          </Card>
        ))}
      <Button
        className='bg-red-900 hover:border-red-900 hover:text-red-900 enabled:hover:bg-white mt-5 mx-auto'
        onClick={async () => {
          await handleCheckout(props.orderUuid);
        }}
      >
        Check Out
      </Button>
    </div>
  );
}
