import Link from "next/link";
import Image from "next/image";
import { productData, socialLinks } from "@/constants";

const Footer = () => {
  const categories = Array.from(
    new Set(productData.map((product) => product.category))
  );
  return (
    <footer className="bg-dark-100  px-6 sm:px-10 lg:px-40 text-light-100">
      <div className="border-t-4 border-primary-500 w-[100px] mx-auto sm:mx-0"></div>
      <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start pt-12 gap-8">
        {/* logo */}
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          height={150}
          width={150}
        />
        <ul className="flex flex-col sm:flex-row gap-4 text-center subtitle">
          <li className="hover:text-primary-500 transition duration-150">
            <Link href="/">home</Link>
          </li>
          {categories.map((category) => (
            <li
              className="hover:text-primary-500 transition duration-150"
              key={category}
            >
              <Link href={`/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>

        {/* nav links */}
      </div>
      <div className="py-12 sm:py-8 sm:pb-10  grid grid-cols-1 sm:grid-cols-2 text-center sm:text-start text-light-100/50 body">
        <p className="sm:col-span-2 lg:col-span-1 sm:pb-14 lg:order-1">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <p className="font-bold py-8 sm:py-0 lg:order-3">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="flex justify-center sm:justify-end gap-6 items-center lg:order-2">
          {socialLinks.map((social) => (
            <li key={social.route}>
              <a href={social.route}>
                <Image
                  src={social.logo}
                  alt={social.name}
                  height={25}
                  width={25}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;