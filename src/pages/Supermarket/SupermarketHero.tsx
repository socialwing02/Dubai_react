import React from "react";
import bgImg from "@/assets/image/supermarket/supermarket-bg.webp";
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

      <div className="text-white w-[min(600px,90vw)]  ">
        <h1 className="text-[clamp(2rem,2.5vw,4rem)]">Enjoy Shopping</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          accusantium similique? Optio, nihil. Ducimus aliquid, explicabo
          aperiam omnis ipsa ut tempore recusandae eum cupiditate, voluptate
          nisi assumenda facilis sit quibusdam!
        </p>
      </div>
    </section>
  );
}
