"use client";
import Categories from "@/components/shared/Categories";
import Button from "@/components/ui/Button";
import { productData } from "@/constants";
import { useCartContext } from "@/context/CartProvider";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import  { useState } from "react";
import { easeOut, motion } from "motion/react";

const ProductDetail = () => {
  const { slug } = useParams();
  const [itemQuantity, setItemQuantity] = useState(1);
  const router = useRouter();
  const { addToCart } = useCartContext();
  const individualProduct = productData.find(
    (product) => product.slug === slug
  );

  const itemIncrement = () => {
    setItemQuantity((q) => q + 1);
  };

  const itemDecrement = () => {
    setItemQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const addToCartHandler = () => {
    if (individualProduct) {
      addToCart({
        id: individualProduct.id,
        name: individualProduct.name,
        image: individualProduct.image,
        price: individualProduct.price,
        quantity: itemQuantity,
      });
    }
    setItemQuantity(1);
  };

  return (
    <div className="section-container pt-4 sm:pt-8">
      <button
        className="body text-dark-100/50 pb-4 sm:pb-7 cursor-pointer"
        onClick={() => router.back()}
      >
        Go back
      </button>
      {individualProduct && (
        <main>
          {/* product purrchase section */}
          <section className="flex flex-col gap-9 sm:gap-16 sm:flex-row sm:items-center">
            <motion.picture
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="w-full sm:w-1/2"
            >
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.image.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.image.tablet}
              />

              <Image
                src={individualProduct.image.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
                className=" sm:pb-0 object-cover rounded-md"
              />
            </motion.picture>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="sm:w-1/2"
            >
              {individualProduct.new && (
                <p className="subtitle-overline text-primary-500">
                  NEW PRODUCT
                </p>
              )}
              <h2 className="h4-bold py-9">{individualProduct.name}</h2>
              <p className="body text-dark-100/50">
                {individualProduct.description}
              </p>
              <p className="h6-bold py-9">{`$${individualProduct.price}`}</p>
              {/* button */}
              <div className="flex gap-4">
                <div className="flex justify-around text-dark-100/25 bg-light-300 w-[120px] items-center">
                  <button onClick={itemDecrement}>-</button>
                  <p className="text-dark-100 subtitle">{itemQuantity}</p>
                  <button onClick={itemIncrement}>+</button>
                </div>
                <Button
                  addToCartHandler={addToCartHandler}
                  action="add-to-cart"
                  label="Add to cart"
                />
              </div>
            </motion.div>
          </section>

          {/* clubbed features and in th box section for large screen */}

          <div className="lg:flex items-start gap-32 lg:pt-40">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="py-22 lg:py-0 sm:py-28 lg:w-2/3"
            >
              <h2 className="h4-bold sm:h3-bold pb-9">Features</h2>
              <div className="body text-dark-100/50">
                {individualProduct.features}
              </div>
            </motion.section>

            {/* in the box section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="sm:flex lg:flex-col gap-40 lg:gap-4 items-start lg:w-1/3"
            >
              <h2 className="h4-bold">in the box</h2>
              <ul className="pt-9 sm:pt-0 flex flex-col gap-4">
                {individualProduct.includes.map((include) => (
                  <li className="flex items-center gap-5" key={include.item}>
                    <p className="text-[15px] font-bold text-primary-500">{`${include.quantity}x`}</p>
                    <p className="body text-dark-100/50">{include.item}</p>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
          {/* product features section */}

          {/* gallery section*/}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-22 lg:pt-40 sm:pt-28"
          >
            {/* first image */}
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.gallery.first.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.gallery.first.tablet}
              />
              <Image
                src={individualProduct.gallery.first.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
                className="w-full object-cover rounded-md"
              />
            </picture>
            {/* second image */}
            <picture className="sm:order-3">
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.gallery.second.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.gallery.second.tablet}
              />
              <Image
                src={individualProduct.gallery.second.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
                className="w-full object-cover rounded-md"
              />
            </picture>
            {/* third image */}
            <picture className="sm:order-2 sm:row-span-2 sm:h-full overflow-hidden">
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.gallery.third.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.gallery.third.tablet}
              />
              <Image
                src={individualProduct.gallery.third.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
                className="w-full sm:h-full object-cover rounded-md"
              />
            </picture>
          </motion.section>

          {/* other product section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="py-22 sm:py-28 lg:py-40 text-center"
          >
            <h2 className="h4-bold sm:h3-bold pb-12">you may also like</h2>
            <ul className="sm:flex items-center gap-3">
              {individualProduct.others.map((product) => {
                const otherProduct = productData.find(
                  (related) => related.slug === product.slug
                );
                const otherProductCategory = otherProduct?.category;

                return (
                  <li className="text-center pb-18" key={product.slug}>
                    <picture>
                      <source
                        media="(min-width:1024px)"
                        srcSet={product.image.desktop}
                      />
                      <source
                        media="(min-width:640px)"
                        srcSet={product.image.tablet}
                      />

                      <Image
                        src={product.image.mobile}
                        alt={product.name}
                        height={500}
                        width={500}
                        className="w-full object-cover rounded-md"
                      />
                    </picture>
                    <h5 className="h5-bold py-10">{product.name}</h5>
                    <Button
                      label="see product"
                      isLink
                      route={`/${otherProductCategory}/${product.slug}`}
                    />
                  </li>
                );
              })}
            </ul>
          </motion.section>

          {/* categories section */}
          <section className="text-center">
            <Categories />
          </section>
        </main>
      )}
    </div>
  );
};

export default ProductDetail;