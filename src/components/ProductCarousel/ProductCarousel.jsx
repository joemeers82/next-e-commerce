"use client";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import Link from "next/link";
import { stringToSlug } from "@/lib/helpers";

export default function ProductCarousel({ products }) {
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="mx-auto pb-4  ">
      <Carousel
        className="h-full  min-h-[300px]"
        animation="slide"
        duration={700}
        autoPlay={false}
        cycleNavigation={false}
      >
        {groupedProducts.map((group, i) => (
          <div className="flex gap-4 justify-center items-start h-full" key={i}>
            {group.map((product, j) => (
              <div
                className=" w-1/3 h-full border rounded-md shadow-md"
                key={product.id}
              >
                <Link href={`${product.id}`}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-[150px] w-[150px] relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className="px-3 mt-4 min-h-[50px] text-sm font-medium">
                      {product.title}
                    </p>
                    <p className="px-3 mt-2 min-h-[20px] text-red-500 font-semibold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
