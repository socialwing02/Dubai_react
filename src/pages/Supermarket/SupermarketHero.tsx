import React from "react";
import bgImg from "@/assets/image/supermarket/super-market-bg.webp";
import Image from "next/image";

export default function SupermarketHero() {
  return (
    <section className="relative py-[16rem]  flex  items-center justify-center">
      <Image
        src={bgImg}
        alt=""
        priority
        fill
        className="absolute object-cover top-0 filter brightness-50 -z-[1] "
      />

      <div className="text-white w-[min(600px,90vw)] text-center ">
        <h1 className="text-[clamp(2rem,2.5vw,4rem)] leading-[1.3]">
          Fresh, Affordable, and Convenient Shopping
        </h1>
        <p>
          Discover a variety of high-quality products that cater to your every
          need. From fresh fruits and vegetables to everyday groceries and
          gourmet selections, we provide a comprehensive shopping experience.
          Enjoy unbeatable convenience, personalized service, and great value,
          ensuring your visit is both enjoyable and efficient.
        </p>
      </div>
    </section>
  );
}
