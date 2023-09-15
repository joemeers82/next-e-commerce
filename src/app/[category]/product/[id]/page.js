import Header from "@/components/Header/Header";
import AddToCart from "@/components/AddToCart/AddToCart";
import Image from "next/image";
import { capitalize } from "@/lib/helpers";
import Rating from "@/components/Rating/Rating";
import ProductsByCategory from "@/components/ProductsByCategory/ProductsByCategory";
import apiRequest from "@/lib/apiRequest";

import { useStore } from "zustand";
const getProduct = async (id) => {
  const product = await apiRequest(`https://fakestoreapi.com/products/${id}`);
  return product;
};

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto flex min-h-screen flex-col items-center justify-between p-10 lg:p-20">
        <div className="flex flex-col lg:flex-row mx-auto p-1 lg:p-4 mb-2">
          <div className="w-full mx-auto lg:w-1/2 p-8 ">
            <div className="mx-auto min-h-[400px] md:min-h-auto relative h-full">
              <Image
                fill
                sizes="(max-width: 200px) 100%, 100px"
                src={product.image}
                alt={product.title}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="mx-auto w-full lg:w-1/2 ">
            <p>{capitalize(product.category)}</p>
            <p className="font-normal text-4xl">{product.title}</p>
            <Rating rating={product.rating} />
            <p className="font-semibold text-2xl">
              ${product.price.toFixed(2)}
            </p>

            <p>{product.description}</p>
            <AddToCart product={product}></AddToCart>
          </div>
        </div>
        <ProductsByCategory category={product.category}></ProductsByCategory>
      </main>
    </>
  );
}
