"use client";
import { productData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("./Cart"), { ssr: false });
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <nav className="max-lg:hidden bg-dark-100 px-40 text-light-100">
      <div className="flex justify-between items-center border-b border-light-100/20 py-10">
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            height={150}
            width={150}
          />
        </Link>

        <ul className="flex gap-8 subtitle">
          <li
            className={`hover:text-primary-500 transition duration-150 ${
              pathName === "/" ? "text-primary-500" : ""
            }`}
          >
            <Link href="/">home</Link>
          </li>
          {categories.map((category) => (
            <li
              className={`hover:text-primary-300 transition duration-150 ${
                pathName === `/${category}` ? "text-primary-500" : ""
              }`}
              key={category}
            >
              <Link href={`/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      <Cart />
      </div>
    </nav>
  );
};

export default Navbar;