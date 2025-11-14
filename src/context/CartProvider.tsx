"use client";
import { CartItemProps } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
  cart: CartItemProps[];
  addToCart: (incomingItem: CartItemProps) => void;
  increaseCartItem: (id: string) => void;
  decreaseCartItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // initialise cart state
  const [cart, setCart] = useState<CartItemProps[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cart");
        console.log(savedCart, "saved cart");
        return savedCart ? JSON.parse(savedCart) : [];
      }
    } catch (error) {
      console.log("Failed to load cart from local storage", error);
    }
    return [];
  });
  console.log(cart, " cart");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add to cart

  const addToCart = (incomingItem: CartItemProps) => {
  
    setCart((prev) => {
      const itemExists = prev.find((i) => i.id === incomingItem.id);

      // if item exist then just increase the quantity else add it to the state
      if (itemExists) {
        return prev.map((existingItem) =>
          existingItem.id === incomingItem.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + incomingItem.quantity,
              }
            : existingItem
        );
      } else {
        return [...prev, { ...incomingItem }];
      }
    });
  };

  // increase cart item
  const increaseCartItem = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease cart item and if 1 then remove it

  const decreaseCartItem = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // remove all cart items

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addToCart,
    clearCart,
    increaseCartItem,
    decreaseCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext should be used inside CartProvider");
  }
  return context;
};
