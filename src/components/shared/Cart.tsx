"use client";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCartContext } from "@/context/CartProvider";
import Button from "../ui/Button";
import { shortenName } from "@/lib/utils";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart, increaseCartItem, decreaseCartItem, clearCart } =
    useCartContext();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:border-none cursor-pointer">
        {" "}
        <div className="relative">
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
            height={25}
            width={25}
          />
          <div className="bg-primary-500 text-light-100 absolute -top-2 -right-2 rounded-full text-[10px] font-bold px-1.75 py-0.5">
            {cart.length}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" absolute top-10 lg:top-18 left-[95.5%] sm:left-[97%] -translate-x-[95.5%] sm:-translate-x-[97%]  w-[90vw] max-w-[377px] px-7 py-9">
        {cart.length > 0 ? (
          <div>
            <div className="flex justify-between">
              <h5 className="h6-bold">Cart ({cart.length}) </h5>
              <button
                onClick={clearCart}
                className="text-dark-100/50 body border-b cursor-pointer hover:text-dark-100/55 transition duration-150"
              >
                Remove All
              </button>
            </div>
            <ul className="pt-10">
              {cart.map((item) => (
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

                  <div className="flex w-24 py-1 justify-around text-dark-100/25 bg-light-300  items-center">
                    <button
                      onClick={() => decreaseCartItem(item.id)}
                      className="cursor-pointer"
                    >
                      -
                    </button>
                    <p className="text-dark-100 subtitle">{item.quantity}</p>
                    <button
                      onClick={() => increaseCartItem(item.id)}
                      className="cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center py-8">
              <p className="body uppercase text-dark-100/50">Total</p>
              <p className="h6-bold">{`$${totalPrice}`}</p>
            </div>
            <Button
              className="w-full"
              label="checkout"
              isLink
              route="/checkout"
            />
          </div>
        ) : (
          <EmptyCart />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;