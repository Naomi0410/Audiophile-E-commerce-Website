import Image from "next/image";
import { shortenName } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: { desktop: string };
}

interface OrderSummaryProps {
  cart: CartItem[];
  totalPrice: number;
  shippingPrice: number;
  vatPrice: number;
  grandTotal: number;
  isMounted: boolean;
}

export default function OrderSummary({
  cart,
  totalPrice,
  shippingPrice,
  vatPrice,
  grandTotal,
  isMounted,
}: OrderSummaryProps) {
  return (
    <div className="px-8 sm:px-10 md:w-1/3 h-fit rounded-md bg-light-100 pt-9 pb-8">
      <h4 className="h4-bold">Summary</h4>
      <ul className="pt-10">
        {isMounted &&
          cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between pb-8 items-center gap-4"
            >
              <div className="flex w-2/3 items-center gap-4">
                <Image
                  src={item.image.desktop}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-1/3 rounded-md"
                />
                <div className="w-1/2">
                  <p className="font-bold text-[15px] uppercase">
                    {shortenName(item.name)}
                  </p>
                  <p className="text-dark-100/50 text-[14px] font-bold">
                    {`$${item.price}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-[15px] font-bold text-dark-100/50">
                <p>x</p>
                <p>{item.quantity}</p>
              </div>
            </li>
          ))}
      </ul>
      <div className="flex flex-col gap-4">
        {isMounted && (
          <>
            <div className="flex items-center justify-between">
              <p className="body uppercase text-dark-100/50">total</p>
              <p className="h6-bold">{`$${totalPrice}`}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="body uppercase text-dark-100/50">shipping</p>
              <p className="h6-bold">{`$${shippingPrice}`}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="body uppercase text-dark-100/50">VAT (INCLUDED)</p>
              <p className="h6-bold">{`$${vatPrice}`}</p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="body uppercase text-dark-100/50">grand total</p>
              <p className="h6-bold text-primary-500">{`$${grandTotal}`}</p>
            </div>
          </>
        )}
        <Button label="Continue & pay" typeButton="submit" />
      </div>
    </div>
  );
}