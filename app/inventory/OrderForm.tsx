import { Button, TextInput, Label } from "flowbite-react";
import { addToCart } from "./OrderFormHandleSubmit";
import { Dispatch, SetStateAction, useState } from "react";

export interface OrderFormProps {
  itemId: any;
}

export default function OrderForm(props: OrderFormProps) {
  const [quantity, setQuantity] = useState(0);

  
  const addToCartWithId = addToCart.bind(null, props.itemId);
  return (
    <form action={addToCartWithId}>
      <div className="mb-2 block">
        <Label htmlFor="itemQuantity" value="Item Quantity" />
      </div>
      <div>
        <Button
          disabled={quantity <= 0}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </Button>
        <TextInput
          className="flex max-w-sm flex-col gap-4"
          id="itemQuantity"
          name="itemQuantity"
          value={quantity}
          type="number"
          required
          sizing="sm"
          onChange={(e) => {
            setQuantity(e.target.valueAsNumber);
          }}
          min={0}
        />
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </div>

      <Button type="submit">Submit Order</Button>
    </form>
  );
}
