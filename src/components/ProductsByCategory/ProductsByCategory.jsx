import { capitalize } from "@/lib/helpers";
import apiRequest from "@/lib/apiRequest";
import { CiTwoTone } from "@ant-design/icons";
import ProductCard from "../ProductCard/ProductCard";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const getProducts = async (category) => {
  const allProducts = await apiRequest("https://fakestoreapi.com/products/");
  const products = allProducts.filter((product) => {
    return product.category === category;
  });
  return products;
};

export default async function ProductsByCategory({ category }) {
  const products = await getProducts(category);
  return (
    <>
      <div className="w-full mt-4">
        <h3 className="my-5 text-center">
          More {capitalize(category)} Products
        </h3>
        <ProductCarousel products={products}></ProductCarousel>
      </div>
    </>
  );
}
