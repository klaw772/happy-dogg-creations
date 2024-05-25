"use client";

import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { Item } from "./page";
import OrderForm from "./OrderForm";
import { OrderContext } from "../context/OrderContext";
export interface ItemModalProps {
  item: Item;
}
export function ItemModal(props: ItemModalProps) {
  const [openModal, setOpenModal] = useState(false);
  const { order, setOrder } = useContext(OrderContext);

  return (
    <>
      <Button onClick={() =>setOpenModal(true)}>{props.item.name}</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{props.item.name}</Modal.Header>
        <Modal.Body>
          <OrderForm itemId={props.item.id} orderUuid={order} setOrderUuid={setOrder}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
