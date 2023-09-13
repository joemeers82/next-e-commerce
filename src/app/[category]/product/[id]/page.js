import Header from "@/components/Header/Header";

const getProduct = async (id) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await data.json();
  return products;
};

export default async function ProductPage({ params }) {
  const products = await getProduct(params.id);

  return (
    <>
      <Header />

      {products.title}
    </>
  );
}
