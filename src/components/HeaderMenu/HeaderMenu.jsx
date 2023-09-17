"use client";

import { useState } from "react";
import Link from "next/link";
import { stringToSlug } from "@/lib/helpers";
export default function HeaderMenu({ categories, classes }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${classes} relative`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden m-3 focus:outline-none focus:shadow-outline"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <ul
        className={`flex flex-col bg-white z-10 mt-[20px] text-left md:mt-0 absolute md:static md:flex-row gap-5 md:m-3 justify-center ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        {categories.map((category, i) => {
          return (
            <li className="md:ml-3 md:my-4 whitespace-nowrap" key={i}>
              <Link href={`/${stringToSlug(category)} `}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
