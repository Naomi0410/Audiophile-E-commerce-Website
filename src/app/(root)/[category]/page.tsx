"use client";
import { productData } from "@/constants";
import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Categories from "@/components/shared/Categories";
import { easeOut, motion } from "motion/react";

const CategoryPage = () => {
  const { category } = useParams();

  const sortedProductDataByCategory = productData
    .filter((product) => product.category === category)
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));

  return (
    <div>
      <div className="bg-dark-100 text-light-100 text-center py-10 sm:py-24">
        <h2 className="h4-bold sm:h2-bold">{category}</h2>
      </div>
      <section className="section-container pt-20 lg:pt-28">
        <ul>
          {sortedProductDataByCategory.map((product) => (
            <li
              key={product.id}
              className="pb-20 lg:pb-28 lg:flex items-center gap-32 lg:even:flex-row-reverse"
            >
              <motion.picture
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: easeOut }}
              >
                <source
                  media="(min-width:1024px)"
                  srcSet={product.categoryImage.desktop}
                />
                <source
                  media="(min-width:640px)"
                  srcSet={product.categoryImage.tablet}
                />
                <Image
                  src={product.categoryImage.mobile}
                  alt={product.name}
                  height={1000}
                  width={1000}
                  className="rounded-md  object-cover"
                />
              </motion.picture>

              {/* text container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: easeOut }}
                className="text-center py-8 sm:max-w-[572px] sm:mx-auto lg:text-start"
              >
                {product.new && (
                  <p className="subtitle-overline text-primary-500">
                    New Product
                  </p>
                )}
                <h2 className="h4-bold py-6 sm:h2-bold sm:max-w-[60%] lg:max-w-full sm:mx-auto lg:mx-0">
                  {product.name}
                </h2>
                <p className="body text-dark-100/50 pb-10">
                  {product.description}
                </p>
                <Button
                  label="See Product"
                  isLink
                  route={`/${category}/${product.slug}`}
                />
              </motion.div>
            </li>
          ))}
        </ul>
      </section>
      <section className="section-container pt-8">
        <Categories />
      </section>
    </div>
  );
};

export default CategoryPage;