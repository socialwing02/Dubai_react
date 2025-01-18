import React from "react";

import groceryImg from "@/assets/image/supermarket/images.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function SupermarketAboutUs() {
  return (
    <section className="flex justify-center items-center gap-10 my-10">
      <Image src={groceryImg} alt="" className="w-[500px]" />

      <div className="w-[min(600px,90vw)] flex flex-col gap-2">
        <h4 className="capitalize text-[clamp(1rem,1vw,3rem)]">
          A few words about our store
        </h4>
        <h2 className="uppercase text-[clamp(2rem,2vw,4rem)]">About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil,
          debitis nostrum, voluptate esse rem labore inventore cupiditate
          obcaecati sint hic. Magnam itaque nihil omnis at consectetur
          laudantium numquam error!
        </p>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
