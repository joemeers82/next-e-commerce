"use client";
import { useState } from "react";
import { useStore } from "../../store";

export default function AddToCart({ state }) {
  const [quantity, setQuantity] = useState(1);

  function addToCart(quantity) {
    const currentProduct = state.selectedProduct;
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
            className="transition-colors duration-300 hover:bg-gray-300 border h-[40px] w-[40px] flex items-center justify-center"
          >
            -
          </button>
          <div className="select-none border h-[40px] w-[40px] flex items-center justify-center">
            {quantity}
          </div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="transition-colors duration-300 hover:bg-gray-300 border h-[40px] w-[40px] flex items-center justify-center"
          >
            +
          </button>
        </div>
        <button
          onClick={() => addToCart(quantity)}
          className="transition-colors duration-300 hover:bg-gray-300 border px-4 flex items-center justify-center uppercase"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
