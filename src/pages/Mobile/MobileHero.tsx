import Image from "next/image";
import React from "react";
import bgImg from "@/assets/image/mobile/mobile-bg.jpg";
import { Button } from "@/components/ui/Button";

export default function MobileHero() {
  return (
    <section className="relative py-[14rem]">
      <Image
        src={bgImg}
        alt=""
        fill
        className="absolute object-cover inset-0 -z-[1]"
      />

      <div className="text-white  flex flex-col gap-4  w-[min(60ch,90vw)] ml-[5rem] ">
        <h1 className="uppercase text-[clamp(2rem,2vw,4rem)]">
          Buy your latest mobiles
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti at
          id minus officiis impedit ut vero ipsa omnis nemo eum quisquam nobis
          corrupti dolorum, quos quaerat iure quam harum assumenda!
        </p>

        <div className="">
          <Button className="bg-white text-black ">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
