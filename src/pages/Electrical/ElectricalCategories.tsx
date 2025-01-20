import { electricalCategoryImages } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function ElectricalCategories() {
  return (
    <>
      <h4 className="text-[clamp(2rem,2vw,4rem)] text-center my-8 ">
        Categories
      </h4>
      <section className="max-w-[80vw] mx-auto  flex flex-wrap gap-10 my-10">
        {electricalCategoryImages.map((image, index) => (
          <Image
            src={image}
            alt=""
            key={index}
            width={200}
            className="rounded-lg"
          />
        ))}
      </section>
    </>
  );
}
