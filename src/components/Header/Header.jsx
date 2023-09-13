import Link from "next/link";
import Cart from "../Cart/Cart";
const getCategories = async () => {
  const data = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await data.json();
  return categories;
};

export default async function Header() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <>
      <header>
        <div className="flex items-center justify-around p-3">
          <h1>
            <Link href="/">Fake Store</Link>
          </h1>
          <Cart />
        </div>
        <div>
          <ul className="flex gap-3 border m-3 justify-center">
            {categories.map((category, i) => {
              return <li key={i}>{category}</li>;
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
