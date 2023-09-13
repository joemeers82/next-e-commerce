import Image from "next/image";

import { useStore } from "../../store";

import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
export default async function ProductList({ products }) {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, i) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </ul>
      <ProductModal />
    </>
  );
}
