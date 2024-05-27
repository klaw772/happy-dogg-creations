import { Button, TextInput, Label } from 'flowbite-react';
import { addOrAdjustCart } from './OrderFormHandleSubmit';

import { Dispatch, SetStateAction, createRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface OrderFormProps {
  itemId: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function OrderForm(props: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [submitDisabled, setSubmitDisabled] = useState(false);
    const router = useRouter();


  const ref = createRef<HTMLFormElement>();

  const handleSubmitClient = async (formData: FormData) => {
    setSubmitDisabled(true);
    const response = await addOrAdjustCart(props.itemId, 'ADD', formData);
    if (response) {
      props.setOpenModal(false);
      router.push('/cart')
    } else {
      throw new Error('Error submitting data');
    }
  };

  return (
    <form ref={ref} action={handleSubmitClient} className='text-center'>
      <div className='mb-2 block'>
        <Label htmlFor='itemQuantity' value='Item Quantity' />
      </div>
      <div className='flex flex-wrap gap-2'>
        <Button
          disabled={quantity <= 1}
          color='red'
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </Button>
        <TextInput
          className='flex max-w-sm flex-col gap-4'
          id='itemQuantity'
          name='itemQuantity'
          value={quantity}
          type='number'
          required
          onChange={(e) => {
            setQuantity(e.target.valueAsNumber);
          }}
          min={1}
        />
        <Button color='green' onClick={() => setQuantity(quantity + 1)}>
          +
        </Button>
      </div>

      <Button
        type='submit'
        className='mt-5 w-full bg-red-900 hover:border-red-900 hover:text-red-900 enabled:hover:bg-white'
        disabled={submitDisabled}
      >
        Add to Cart
      </Button>
    </form>
  );
}
