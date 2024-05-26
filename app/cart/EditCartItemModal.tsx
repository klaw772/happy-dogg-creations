'use client'
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, createRef, useState } from "react";
import { CartItem } from "./page";
import { addOrAdjustCart } from "../inventory/OrderFormHandleSubmit";

type EditCartItemModalProps = {
  item: CartItem;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
export default function EditCartItemModal (props: EditCartItemModalProps) {
  const [newQuantity, setNewQuantity] = useState(props.item.quantity);

  const ref = createRef<HTMLFormElement>();

  const handleSubmitClient = async (formData: FormData) => {
    const response = await addOrAdjustCart(props.item.id, 'EDIT', formData);
    if (response) {
      props.setOpenModal(false);
    } else {
      throw new Error('Error submitting data');
    }
  };
  return (
    <Modal
      show={props.openModal}
      onClose={() => props.setOpenModal(false)}
    >
      <Modal.Header>{`Edit ${props.item.name}`}</Modal.Header>
      <Modal.Body className='flex flex-col items-center justify-center text-center'>
        <div className='mb-1'>hi</div>

        <form className='text-center' ref={ref} action={handleSubmitClient}>
          <div className='mb-2 block'>
            <Label htmlFor='itemQuantity' value='Item Quantity' />
          </div>
          <div className='flex flex-wrap gap-2'>
            <Button
              disabled={newQuantity <= 0}
              color='red'
              onClick={() => setNewQuantity(newQuantity - 1)}
            >
              -
            </Button>
            <TextInput
              className='flex max-w-sm flex-col gap-4'
              id='itemQuantity'
              name='itemQuantity'
              value={newQuantity}
              type='number'
              required
              onChange={(e) => {
                setNewQuantity(e.target.valueAsNumber);
              }}
              min={1}
            />
            <Button
              color='green'
              onClick={() => setNewQuantity(newQuantity + 1)}
            >
              +
            </Button>
          </div>

          <Button
            type='submit'
            className='mt-5 w-full bg-red-900 hover:border-red-900 hover:text-red-900 enabled:hover:bg-white'
          >
            Add to Cart
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}