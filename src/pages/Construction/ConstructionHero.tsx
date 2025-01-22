import Image from "next/image";
import React from "react";
import bgImg from "@/assets/image/construction/construction-bg.jpg";
import { Button } from "../../components/ui/Button";

export default function ConstructionHero() {
  return (
    <section className="relative  py-[14rem]  flex items-center">
      <Image
        src={bgImg}
        alt=""
        objectFit="cover"
        className="absolute top-0 -z-[1] filter brightness-50"
        fill
      />

      <div className="w-[700px]  ml-[8rem] text-white grid  gap-4">
        <h1 className="text-[clamp(2rem,2vw,4rem)] uppercase font-bold text-balance">
          Building Dreams Crafting Excellence
        </h1>
        <p>
          We bring visions to life with precision, dedication, and a commitment
          to quality. From residential homes to large-scale commercial projects,
          every structure is crafted to stand the test of time. Our focus on
          innovation, sustainability, and detail ensures exceptional results
          tailored to meet diverse needs. Whether it’s designing, building, or
          renovating, we deliver solutions that exceed expectations, creating
          spaces that inspire and endure.
        </p>

        <div className="flex gap-6">
          <Button>Get Started</Button>
          <Button variant="outline" className="text-black">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
