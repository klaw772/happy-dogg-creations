'use client';

import { Button, Card, Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Item } from './page';
import OrderForm from './OrderForm';
import Image from 'next/image';

export interface ItemModalProps {
  item: Item;
}
export function ItemModal(props: ItemModalProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        className='max-w-sm'
        imgAlt={props.item.name}
        imgSrc={props.item.img_url}
      >
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {props.item.name}
        </h5>
        <Button
          className='bg-red-900 hover:border-red-900 hover:text-red-900 enabled:hover:bg-white'
          onClick={() => setOpenModal(true)}
        >
          Add to Cart
        </Button>
      </Card>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{props.item.name}</Modal.Header>
        <Modal.Body className='flex flex-col items-center justify-center text-center'>
          <div className='mb-1'>
            <Image
              src={props.item.img_url}
              alt='Ecommerce Greeting Page'
              width={300}
              height={300}
            />
          </div>

          <p className='text-md mb-5'>{props.item.description}</p>

          <OrderForm itemId={props.item.id} setOpenModal={setOpenModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}
