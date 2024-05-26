'use client'

import { Button, Card } from "flowbite-react";
import { handleCheckout } from "./HandleCheckout";
import { CartItem } from "./page";

export interface CartContentsProps {
  items: CartItem[];
  orderUuid: string;
}
export default function CartContents(props: CartContentsProps) {
  return (
    <>
      <p className="text-3xl mb-5">Cart</p>
      <p className="mb-3">
        It&apos;s all free! Because who doesn&apos;t like spoiling pets?
      </p>
      <div>
        {props.items.map((item) => (
          <Card
            key={item.name}
            className="max-w-sm mb-5"
            imgSrc={item.img_url}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name} x {item.quantity}
            </h5>
          </Card>
        ))}
      </div>
      <Button
        onClick={async () => {
          await handleCheckout(props.orderUuid);
        }}
      >
        Check Out
      </Button>
    </>
  );
}