"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useStore } from "../../store";

export default function Cart() {
  const cart = useStore((state) => state.productCart);

  const [showCart, setShowCart] = useState(false);
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <>
      <p>
        {totalItems} items
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
              <div className="flex gap-2" key={i}>
                <div>
                  <p>{product.quantity}</p>
                </div>
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
