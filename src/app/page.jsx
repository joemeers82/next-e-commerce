import Image from "next/image";
import ProductList from "@/components/ProductList/ProductList";
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";
import { useStore } from "../store";
import apiRequest from "@/lib/apiRequest";

const getProducts = async () => {
  // const data = await fetch("https://fakestoreapi.com/products");
  // const products = await data.json();
  const products = await apiRequest("https://fakestoreapi.com/products/");
  return products;
};

export default async function Home() {
  const products = await getProducts();
  useStore.setState([]);
  const productCart = useStore.getState("productCart");

  return (
    <>
      <Header />

      <main className="max-w-screen-xl mx-auto flex min-h-screen flex-col items-center justify-between p-10 lg:p-20">
        <ProductList products={products} />
      </main>
    </>
  );
}
