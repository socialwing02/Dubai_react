import React from "react";

import groceryImg from "@/assets/image/supermarket/supermarket-about.webp";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function SupermarketAboutUs() {
  return (
    <section className="flex justify-center items-center gap-10 my-10">
      <Image src={groceryImg} alt="" className="w-[500px]" />

      <div className="w-[min(600px,90vw)] flex flex-col gap-2">
        <h2 className="uppercase text-[clamp(2rem,2vw,4rem)] font-semibold">
          Fresh Fast and Friendly Grocery Shopping
        </h2>
        <p>
          Enjoy a convenient and seamless shopping experience with a wide range
          of fresh produce, quality meats, and everyday essentials. Our goal is
          to provide you with exceptional service and competitive prices,
          ensuring that your grocery trips are fast, easy, and enjoyable. Trust
          us to meet all your shopping needs with care and efficiency.
        </p>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
