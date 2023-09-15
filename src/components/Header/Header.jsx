import Link from "next/link";
import Cart from "../Cart/Cart";
import StarIcon from "@mui/icons-material/Star";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

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
        <div className="items-center justify-between p-4 flex md:grid md:grid-cols-3 md:grid-rows-2">
          <HeaderMenu
            classes={`md:row-start-2 md:col-start-2 md:col-end-2 text-center `}
            categories={categories}
          ></HeaderMenu>
          <h1 className="text-5xl flex-grow text-right mx-auto md:row-start-1 md:col-start-2 md:col-end-2 w-full  md:text-center">
            <Link href="/">
              <StarIcon fontSize="large"></StarIcon>
              Fake Store
            </Link>
          </h1>
          <Cart classes={`md:row-start-1 md:col-start-3 md:col-end-3 `} />
        </div>
      </header>
    </>
  );
}
