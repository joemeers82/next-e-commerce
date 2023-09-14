"use client";
import { useState } from "react";
import { useStore } from "../../store";

export default function AddToCart({ product }) {
  const state = useStore((state) => state);
  const [quantity, setQuantity] = useState(1);

  function addToCart(quantity) {
    const currentProduct = product;
    const cart = [...state.productCart];

    //if product already in cart
    const productInCart = cart.findIndex(
      (item) => item.id === currentProduct.id
    );

    if (productInCart !== -1) {
      // update its quantity if in cart
      cart[productInCart].quantity += quantity;
    } else {
      // if not add current quantity to product object and push to cart
      cart.push({ ...currentProduct, quantity });
    }

    useStore.setState({
      ...state,
      productCart: cart,
    });

    console.log(state.productCart);
  }

  return (
    <>
      <div className="flex gap-3 my-5">
        <div className="flex">
          <button
            onClick={() => {
              quantity > 0 ? setQuantity(quantity - 1) : null;
            }}
            className="transform  active:translate-y-[.1rem] transition duration-200 transition duration-200 hover:bg-gray-300 border h-[40px] w-[40px] flex items-center justify-center"
          >
            -
          </button>
          <div className="select-none border h-[40px] w-[40px] flex items-center justify-center">
            {quantity}
          </div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="transform  active:translate-y-[.1rem] transition duration-200 transition duration-200 hover:bg-gray-300 border h-[40px] w-[40px] flex items-center justify-center"
          >
            +
          </button>
        </div>
        <button
          onClick={() => addToCart(quantity)}
          className="transform  active:translate-y-[.1rem] transition duration-200 hover:bg-gray-300 border px-4 flex items-center justify-center uppercase"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
