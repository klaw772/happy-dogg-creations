"use client";

import { Button, Card, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { Item } from "./page";
import OrderForm from "./OrderForm";

export interface ItemModalProps {
  item: Item;
}
export function ItemModal(props: ItemModalProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={props.item.img_url}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.item.description}
        </p>
        <Button onClick={() => setOpenModal(true)}>Add to Cart</Button>
      </Card>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{props.item.name}</Modal.Header>
        <Modal.Body>
          <OrderForm
            itemId={props.item.id}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
