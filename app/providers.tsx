import { OrderProvider } from "./context/OrderContext";

export interface ProviderProps {
  children: JSX.Element;
}
export function Providers({children}: ProviderProps) {
  return (
    <OrderProvider>{children}</OrderProvider>
  )
}