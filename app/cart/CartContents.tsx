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
  }, [itemList])
  return (
    <>
      <p className='mb-5 text-3xl'>Cart</p>
      <p className='mb-3'>
        It&apos;s all free! Because who doesn&apos;t like spoiling pets?
      </p>
      <List unstyled className='w-3/4 divide-y divide-gray-200'>
        {itemList.map((item) => (
          <List.Item
            key={item.name}
            className='flex md:justify-between py-3 sm:py-4 flex-wrap items-center'
          >
            <h5 className='flex items-center space-x-4 text-2xl font-bold text-gray-900 mb-2 md:mb-0'>
              {item.name} x {item.quantity}
            </h5>
            <div className="flex">
              <Button className='md:ml-4' onClick={() => setOpenModal(true)}>hallo?</Button>
            </div>
            <EditCartItemModal item={item} openModal={openModal} setOpenModal={setOpenModal} />
          </List.Item>
        ))}
      </List>
      <Button
        className='bg-red-900 hover:border-red-900 hover:text-red-900 enabled:hover:bg-white'
        onClick={async () => {
          await handleCheckout(props.orderUuid);
        }}
      >
        Check Out
      </Button>
    </>
  );
}
