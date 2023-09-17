import { capitalize, stringToSlug } from "@/lib/helpers";
import Header from "@/components/Header/Header";
import { useStore } from "../../store";
import apiRequest from "@/lib/apiRequest";
import ProductList from "@/components/ProductList/ProductList";

const getProducts = async () => {
  const products = await apiRequest("https://fakestoreapi.com/products/");
  return products;
};

export default async function CategoryPage({ params }) {
  const products = await getProducts();
  const catProducts = products.filter(
    (product) => stringToSlug(product.category) === params.category
  );
  useStore.setState([]);
  const productCart = useStore.getState("productCart");
  const string = "Men's clothing";
  return (
    <>
      <Header></Header>
      <h1 className="text-3xl flex-grow text-right mx-auto w-full  md:text-center">
        {capitalize(catProducts[0].category)}
      </h1>
      <main className="flex min-h-screen flex-col items-center justify-between pt-10 p-24">
        <ProductList products={catProducts} />
      </main>
    </>
  );
}
