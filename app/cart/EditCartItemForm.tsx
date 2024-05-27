'use client'
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { createRef, useState } from "react";
import { CartItem } from "./page";
import { addOrAdjustCart } from "../inventory/OrderFormHandleSubmit";

type EditCartItemFormProps = {
  item: CartItem;
  updateItems: () => void;
}
export default function EditCartItemForm (props: EditCartItemFormProps) {
  const [newQuantity, setNewQuantity] = useState(props.item.quantity);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = createRef<HTMLFormElement>();

  const handleSubmitClient = async (formData: FormData) => {
    setIsSubmitting(true);
    const response = await addOrAdjustCart(props.item.id, 'EDIT', formData);
    if (response) {
      props.updateItems();
      setIsSubmitting(false);
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
      <Button color="gray" disabled={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  );
}