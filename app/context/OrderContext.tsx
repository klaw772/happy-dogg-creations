'use client'

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type OrderContextValue = {
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
}
const defaultOrderState: OrderContextValue = {
  order: '',
  setOrder: (state) => {},
};

export const OrderContext = createContext(defaultOrderState);

export interface OrderProps {
  children: JSX.Element
}

export function OrderProvider(props: OrderProps) {
  const [order, setOrder] = useState(defaultOrderState.order);

  useEffect(() => {
    let orderData = localStorage.getItem("order");
    if (!orderData) {
      orderData = uuidv4();
      localStorage.setItem('order', orderData);
    }
    setOrder(orderData);
  }, [])
  return (
    <OrderContext.Provider value={{order, setOrder}}>
      {props.children}
    </OrderContext.Provider>
  );
}

