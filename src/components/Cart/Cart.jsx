"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import UpdateCart from "../UpdateCart/UpdateCart";
import { useStore } from "../../store";

export default function Cart() {
  const state = useStore((state) => state);
  const cart = useStore((state) => state.productCart);
  const showCart = useStore((state) => state.showSideCart);

  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  const total = cart
    .map((product, i) => {
      return product.price * product.quantity;
    })
    .reduce((acc, price) => {
      return acc + price;
    }, 0);

  function toggleCart() {
    useStore.setState({
      ...state,
      showSideCart: !showCart,
    });
  }

  return (
    <div className="border justify-end flex relative">
      {" "}
      {/* Added relative positioning here */}
      <p className="flex min-w-[140px] justify-between">
        {totalItems} items
        <ShoppingCartOutlinedIcon
          className="cursor-pointer"
          fontSize="large"
          onClick={() => toggleCart()}
        />
      </p>
      <div
        className={`${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out fixed right-0 w-96 right-[-12px] top-0 h-full bottom-0 border bg-white z-10 overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-3 border-b">
          {" "}
          <h3 className="text-lg">Shopping Cart</h3>
          <span className="cursor-pointer" onClick={() => toggleCart()}>
            X
          </span>
        </div>
        <div className="p-3">
          {cart.map((product, i) => {
            return (
              <div className="flex gap-2 mb-3 border-b pb-2" key={i}>
                <div className="flex-shrink-0">
                  <p>{product.quantity}</p>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">
                    {product.title} @ ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <UpdateCart product={product} cart={cart}></UpdateCart>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-3 border-t">
          <p className="font-bold">Subtotal: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
