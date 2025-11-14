"use client";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { categoryData } from "@/constants";
import Link from "next/link";
import dynamic from "next/dynamic";

const Cart = dynamic(() => import("./Cart"), { ssr: false });

const MobileNav = () => {
  return (
    <nav className="lg:hidden bg-dark-100 flex justify-between px-6 py-6 border-b border-light-100/10">
      <div className="flex items-center w-full md:gap-12 justify-between">
        <Drawer direction="top">
          <DrawerTrigger>
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="nav-menu"
              height={20}
              width={20}
            />
          </DrawerTrigger>
          <DrawerContent className="px-8 py-20 overflow-y-auto max-h-[90vh]">
            <DrawerTitle className="hidden">
              Are you absolutely sure?
            </DrawerTitle>
            <ul className="flex flex-col sm:flex-row gap-12 sm:gap-4">
              {categoryData.map((category) => (
                <li
                  className="bg-light-400 pt-23 pb-5 rounded-md relative w-full "
                  key={category.name}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    height={105}
                    width={120}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
                  />
                  <div className="text-center">
                    <p className="text-[15px] pb-4 leading-5 font-bold uppercase tracking-[1.7px]">
                      {category.name}
                    </p>
                    <DrawerClose asChild>
                      <Link
                        className="flex text-[13px] text-dark-100/50 font-bold leading-[18px] tracking-[1px] uppercase justify-center items-center gap-2"
                        href={`/${category.name}`}
                      >
                        <p className="hover:text-primary-500 transition duration-150">shop</p>{" "}
                        <Image
                          src="/assets/shared/desktop/icon-arrow-right.svg"
                          alt="link"
                          height={10}
                          width={10}
                        />
                      </Link>
                    </DrawerClose>
                  </div>
                </li>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
        <Link href="/" className="md:flex-1">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            height={120}
            width={120}
          />
        </Link>
        <div>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
