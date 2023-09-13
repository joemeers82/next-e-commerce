import Image from "next/image";
import ProductList from "@/components/ProductList/ProductList";
// import StoreInitializer from "@/components/StoreInitializer/StoreInitializer";
import Header from "@/components/Header/Header";
import Cart from "@/components/Cart/Cart";
import { useStore } from "../store";

const getProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  return products;
};

export default async function Home() {
  const products = await getProducts();
  useStore.setState([]);
  const productCart = useStore.getState("productCart");

  return (
    <>
      {/* <StoreInitializer productCart={[]} /> */}
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductList products={products} />
      </main>
    </>
  );
}
