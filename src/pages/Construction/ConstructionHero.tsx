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
        <h1 className="text-[clamp(2rem,2vw,4rem)] uppercase font-bold">
          We build your dream{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          consectetur. Repellendus ea placeat necessitatibus alias saepe eius
          dolorum quas excepturi? Fugiat, iure? Incidunt, in labore. Cum sunt
          voluptatum sed molestiae.
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
