"use client";

import Image from "next/image";
import Link from "next/link";
import { capitalize, stringToSlug } from "@/lib/helpers";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProductPreviewButton from "../ProductPreviewButton/ProductPreviewButton";

export default function ProductCard({ product }) {
  return (
    <>
      <li className="rounded-md border  ">
        <Link href={`/${stringToSlug(product.category)}/product/${product.id}`}>
          <div className="relative card-image group">
            <div className="w-[200px] h-[350px] relative mx-auto">
              <Image
                src={product.image}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 200px) 100%, 100px"
                alt={product.title}
              />
            </div>

            <div className="opacity-0 absolute group-hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer bg-gray-500 bg-opacity-50 h-full w-full top-0 overlay flex justify-between items-center">
              <div className=" flex flex-col h-full ml-auto p-2 text-right">
                <div className="cursor-pointer icon-group my-3 mr-1">
                  <span className="relative bg-black text-white rounded text-[11px] p-2  opacity-0 icon-group-hover:opacity-100 transition-opacity duration-200 ease-in-out mr-2">
                    Quick View
                  </span>
                  <ProductPreviewButton product={product} />
                </div>
                <div className="cursor-pointer icon-group  my-3 mr-1">
                  <span className="relative bg-black text-white rounded text-[11px] p-2 opacity-0 icon-group-hover:opacity-100 transition-opacity duration-200 ease-in-out mr-2">
                    Select Options
                  </span>

                  <ShoppingBasketOutlinedIcon
                    fontSize="large"
                    className="border rounded-full bg-white p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="rounded py-1">
          <span className="text-slate-500">{capitalize(product.category)}</span>
        </div>
        <p className="font-semibold text-md">{product.title}</p>
      </li>
    </>
  );
}
