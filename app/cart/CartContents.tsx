'use client';

import { Button, Card } from 'flowbite-react';
import { handleCheckout } from './HandleCheckout';
import { CartItem } from './page';

export interface CartContentsProps {
  items: CartItem[];
  orderUuid: string;
}
export default function CartContents(props: CartContentsProps) {
  return (
    <>
      <p className='mb-5 text-3xl'>Cart</p>
      <p className='mb-3'>
        It&apos;s all free! Because who doesn&apos;t like spoiling pets?
      </p>
      <div>
        {props.items.map((item) => (
          <Card
            key={item.name}
            className='mb-5 max-w-sm'
            imgSrc={item.img_url}
            horizontal
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {item.name} x {item.quantity}
            </h5>
          </Card>
        ))}
      </div>
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
