"use client";
import Image from "next/image";
import { easeOut, motion } from "motion/react";

const BrandDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: easeOut }}
      className="section-container py-30 lg:py-40 lg:flex items-center gap-30"
    >
      <Image
        src="/assets/shared/mobile/image-best-gear.jpg"
        alt="best-gear"
        height={1000}
        width={1000}
        className="rounded-md sm:hidden"
      />
      <Image
        src="/assets/shared/tablet/image-best-gear.jpg"
        alt="best-gear"
        height={1000}
        width={1000}
        className="rounded-md max-sm:hidden lg:hidden"
      />
      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="best-gear"
        height={1000}
        width={1000}
        className="rounded-md w-1/2 max-lg:hidden lg:order-2"
      />
      <div className="text-center lg:w-1/2 lg:text-start sm:max-w-[575px] mx-auto lg:mx-0 mt-10 lg:order-1">
        <h4 className="h4-bold sm:h2-bold">
          Bringing you the <span className="text-primary-500">best</span> audio
          gear
        </h4>
        <p className="body text-dark-100/50 mt-8">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </motion.div>
  );
};

export default BrandDescription;