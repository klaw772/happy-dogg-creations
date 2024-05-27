'use client'
import { Button, Label, TextInput } from "flowbite-react";
import { createRef, useState } from "react";
import { CartItem } from "./page";
import { addOrAdjustCart } from "../inventory/OrderFormHandleSubmit";
import { FaCheck } from 'react-icons/fa';

type EditCartItemFormProps = {
  item: CartItem;
  updateItems: () => void;
}
export default function EditCartItemForm (props: EditCartItemFormProps) {
  const [newQuantity, setNewQuantity] = useState(props.item.quantity);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [doneSubmitting, setDoneSubmitting] = useState(false);

  const ref = createRef<HTMLFormElement>();

  const handleSubmitClient = async (formData: FormData) => {
    setIsSubmitting(true);
    const response = await addOrAdjustCart(props.item.id, 'EDIT', formData);
    if (response) {
      props.updateItems();
      setIsSubmitting(false);
      setDoneSubmitting(true);
      setTimeout(() => {
        setDoneSubmitting(false);
      }, 1000);
    } else {
      throw new Error('Error submitting data');
    }
  };
  return (
    <form className='flex flex-col gap-4' ref={ref} action={handleSubmitClient}>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='itemQuantity' value='Edit Quantity' />
        </div>
        <TextInput
          id='itemQuantity'
          name='itemQuantity'
          type='number'
          min={0}
          onChange={(e) => setNewQuantity(e.target.valueAsNumber)}
          value={newQuantity}
          required
        />
      </div>
      <Button color='gray' disabled={isSubmitting} type='submit'>
        {doneSubmitting && (<FaCheck className='mr-2 h-5 w-5' />)}
        Submit
      </Button>
    </form>
  );
}