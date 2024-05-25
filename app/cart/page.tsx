'use client'

import { useContext, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";
import Link from "next/link";

export default function Cart() {
  const { order, setOrder } = useContext(OrderContext);
  return (
    <div>{order}</div>
  )
}