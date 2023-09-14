import Header from "@/components/Header/Header";
import AddToCart from "@/components/AddToCart/AddToCart";
import { useStore } from "zustand";
const getProduct = async (id) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await data.json();
  return product;
};

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <>
      <Header />

      {product.title}
      <AddToCart product={product}></AddToCart>
    </>
  );
}
