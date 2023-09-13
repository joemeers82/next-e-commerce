"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useStore } from "../../store";

export default function Cart() {
  const cart = useStore((state) => state.productCart);
  console.log(cart);
  const [showCart, setShowCart] = useState(false);

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <>
      <p>
        {cart.length} items
        <ShoppingCartOutlinedIcon
          className="cursor-pointer"
          fontSize="large"
          onClick={() => toggleCart()}
        />
      </p>
      {showCart && (
        <div className="absolute right-0 h-full top-[40px] border bg-white z-10">
          {cart.map((product, i) => {
            return (
              <div key={i}>
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
