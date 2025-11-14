"use client";
import Categories from "@/components/shared/Categories";
import Button from "@/components/ui/Button";

import Image from "next/image";
import Link from "next/link";
import { easeOut, motion } from "motion/react";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="flex lg:justify-between lg:h-[500px] items-center py-30 sm:pt-36 sm:pb-54 lg:py-0 lg:px-40 bg-[url(/assets/home/mobile/image-header.jpg)] sm:bg-[url(/assets/home/tablet/image-header.jpg)] lg:bg-none lg:bg-dark-100 bg-no-repeat bg-center bg-cover">
        {/* text container */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="lg:w-1/2 sm:max-w-[400px] lg:py-30 mx-auto lg:mx-0 text-center lg:text-start"
        >
          <p className="subtitle-overline text-light-100/50 pb-4 sm:pb-6">
            NEW PRODUCT
          </p>
          <h1 className="h1-mobile-bold sm:h1-bold text-light-100 pb-6">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="body text-white/50 pb-10 sm:max-w-[350px] mx-auto lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            label="See Product"
            isLink
            route="/headphones/xx99-mark-two-headphones"
          />
        </motion.div>
        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="w-1/2 h-full max-lg:hidden"
        >
          <Image
            className="h-full object-cover"
            src="/assets/home/desktop/image-hero.jpg"
            alt="hero-image"
            height={1000}
            width={1000}
          />
        </motion.div>
      </section>

      {/* category section */}
      <section className="section-container py-30 lg:py-40">
        <Categories />
      </section>

      {/* product section */}
      <section className="px-6 sm:px-10 lg:px-40">
        {/* product 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-6  items-center  relative overflow-hidden  bg-primary-500 py-20 lg:px-8 rounded-md"
        >
          <div>
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              alt="pattern-circle"
              height={500}
              width={500}
              className="w-full absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
          </div>

          {/* product image */}
          <div className="z-10 ">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="speaker-zx9"
              height={500}
              width={500}
              className="max-w-[180px] lg:max-w-[400px] lg:-mb-24"
            />
          </div>
          {/* text container */}
          <div className="max-w-[280px] z-10 sm:max-w-[350px]  text-center lg:text-start">
            <h2 className="h1-mobile-bold text-light-100 pb-6 w-1/2 mx-auto lg:mx-0">
              ZX9 SPEAKER
            </h2>
            <p className="body text-light-100/75 pb-8 sm:pb-12">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              className="bg-dark-100 text-[13px] cursor-pointer text-light-100 font-bold leading-[18px] tacking-[1px] uppercase border border-dark-100 px-9 py-3.5 hover:bg-[#4c4c4c] transition duration-150"
              href="/speakers/zx9-speaker"
            >
              See product
            </Link>
          </div>
        </motion.div>
        {/* product 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="py-28 px-6 lg:px-20 mb-6 bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] sm:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)] bg-no-repeat bg-center bg-cover rounded-md"
        >
          <div>
            <h4 className="h4-bold mb-8">ZX7 SPEAKER</h4>
            <Button
              label="See product"
              isLink
              route="/speakers/zx7-speaker"
              buttonStyle="secondary"
            />
          </div>
        </motion.div>

        {/* product 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            height={500}
            width={500}
            className="rounded-md w-full sm:w-1/2 sm:hidden"
          />
          <Image
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            height={500}
            width={500}
            className="rounded-md sm:w-1/2 max-sm:hidden lg:hidden"
          />
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            height={500}
            width={500}
            className="rounded-md sm:w-1/2 max-lg:hidden"
          />
          <div className="bg-light-400 flex items-center py-14 px-6 rounded-md sm:w-1/2">
            <div>
              <h4 className="h4-bold mb-8">YX1 EARPHONES</h4>
              <Button
                label="See product"
                isLink
                route="/earphones/yx1-earphones"
                buttonStyle="secondary"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}