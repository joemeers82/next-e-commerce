"use client";
const { useStore } = require("../../store");
import { capitalize } from "@/lib/helpers";
import Image from "next/image";
import Rating from "../Rating/Rating";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductModal(product) {
  const state = useStore((state) => state);

  function closeModal() {
    useStore.setState({ ...state, showPreviewProduct: false });
  }

  return (
    <>
      {state.showPreviewProduct && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center"
          onClick={() => closeModal()}
        >
          <div
            className="relative border rounded bg-white w-[80%] mw-[900px] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="ml-auto h-[30px] w-[30px] border-2 border-[black] rounded-full top-[-10px] right-[-10px] font-semibold relative text-center cursor-pointer bg-white"
              onClick={() => closeModal()}
            >
              X
            </div>
            <div className="flex  p-4">
              <div className=" ">
                <div className="relative  w-[300px] h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 200px) 100%, 100px"
                    src={state.selectedProduct.image}
                    alt={state.selectedProduct.title}
                  />
                </div>
              </div>
              <div className="w-1/2 ml-8">
                <p>{capitalize(state.selectedProduct.category)}</p>
                <p className="font-normal text-4xl">
                  {state.selectedProduct.title}
                </p>
                <Rating rating={state.selectedProduct.rating} />
                <p className="font-semibold text-2xl">
                  ${state.selectedProduct.price.toFixed(2)}
                </p>

                <p>{state.selectedProduct.description}</p>
                {/* <div onClick={() => addToCart(product)}> Add to cart</div> */}
                <AddToCart state={state}></AddToCart>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
