import React from "react";
import iconImg from "@/assets/image/supermarket/supermarketIconImg.png";
import Image from "next/image";

export default function SupermarketIcons() {
  return (
    <section className="grid grid-cols-[repeat(3,400px)] max-w-[80vw] mx-auto justify-center">
      <div></div>

      <Image src={iconImg} alt="" className="w-[500px]" />
    </section>
  );
}
