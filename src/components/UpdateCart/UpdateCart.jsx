"use client";
import { useState } from "react";
import { useStore } from "../../store";

export default function UpdateCart({ product, cart }) {
  const state = useStore();

  function updateQuantity(newQuantity) {
    // remove the product from the cart if quantity is 0
    if (newQuantity === 0) {
      removeFromCart();
      return;
    }

    const updatedCart = [...cart];

    const productIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity = newQuantity;
      useStore.setState({
        ...state,
        productCart: updatedCart,
      });
    }
  }

  function removeFromCart() {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    useStore.setState({
      ...state,
      productCart: updatedCart,
    });
  }

  return (
    <>
      <div className="flex gap-3 my-5 w-full">
        <div className="flex w-full justify-between">
          <div className="flex">
            <button
              onClick={() => {
                product.quantity > 0
                  ? updateQuantity(product.quantity - 1)
                  : null;
              }}
              className="transform  active:translate-y-[.1rem] transition duration-200 transition duration-200 hover:bg-gray-300 border h-[40px] w-[40px] flex items-center justify-center"
            >
              -
            </button>
            <div className="select-none border h-[40px] w-[40px] flex items-center justify-center">
              {product.quantity}
            </div>
            <button
              onClick={() => updateQuantity(product.quantity + 1)}
              className="transform  active:translate-y-[.1rem] transition duration-200 transition duration-200 hover:bg-gray-300 border h-[40px] w-[40px] flex items-center justify-center"
            >
              +
            </button>
          </div>
          <div className="flex items-center pr-4">
            <span
              onClick={removeFromCart}
              className="cursor-pointer text-sm text-red-500"
            >
              remove
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
