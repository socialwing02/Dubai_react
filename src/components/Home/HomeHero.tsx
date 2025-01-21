import React from "react";
import bgImg from "@/assets/image/blob-image.jpg";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function HomeHero() {
  return (
    <section className=" flex justify-center gap-10 my-10">
      <div className="w-[min(70ch,90vw)] z-10  relative  flex flex-col gap-4">
        <h1 className="uppercase text-[clamp(2rem,2vw,4rem)] font-semibold">
          Your One-Stop Destination for All Your Needs{" "}
        </h1>
        <p>
          Discover a world of convenience with everything you need in one place!
          From high-quality phone accessories and daily essentials to seamless
          travel services and expert construction solutions. Pamper yourself at
          the salon or enjoy mouthwatering meals at the restaurant. Explore
          cutting-edge electronics and electrical products designed to simplify
          your life. Experience variety, quality, and service all in one
          destination
        </p>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Demo</Button>
        </div>
      </div>

      <Image src={bgImg} alt="" className="w-[600px] object-cover" />
    </section>
  );
}
