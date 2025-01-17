import React from "react";
import bgImg from "@/assets/image/blob-image.jpg";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function HomeHero() {
  return (
    <section className=" flex justify-around my-10">
      <div className="w-[min(500px,90vw)] z-10  relative  flex flex-col gap-4">
        <h1 className="uppercase text-[clamp(2rem,2vw,4rem)] font-semibold">
          hello there
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus
          facilis sit beatae impedit. Cum beatae saepe, harum sunt reprehenderit
          nostrum? Odit hic dolorem neque ea nihil earum, iure dignissimos?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus
          facilis sit beatae impedit. Cum beatae saepe, harum sunt reprehenderit
          nostrum? Odit hic dolorem neque ea nihil earum, iure dignissimos?
        </p>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Demo</Button>
        </div>
      </div>

      <Image src={bgImg} alt="" className="w-[500px]  h-[500px] object-cover" />
    </section>
  );
}
