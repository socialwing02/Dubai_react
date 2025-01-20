import React from "react";
import iconImg from "@/assets/image/supermarket/supermarketIconImg.png";
import Image from "next/image";
import { supermarketIconleftContent } from "@/lib/constants";

export default function SupermarketIcons() {
  return (
    <section className="grid grid-cols-[300px,400px,300px] max-w-[70vw]  mx-auto justify-center items-center my-10">
      <div className="grid gap-10">
        {supermarketIconleftContent.map((item, index) => (
          <div key={index} className="flex justify-between gap-4">
            <h4 className="text-lg font-semibold ">{item.title}</h4>
            <item.icon sx={{ color: "#4a8b71", fontSize: "2.6rem" }} />
          </div>
        ))}
      </div>

      <Image src={iconImg} alt="" className="w-[500px]" />

      <div className="grid gap-10">
        {supermarketIconleftContent.map((item, index) => (
          <div key={index} className="flex justify-between gap-4">
            <item.icon sx={{ color: "#4a8b71", fontSize: "2.6rem" }} />
            <h4 className="text-lg font-semibold">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
