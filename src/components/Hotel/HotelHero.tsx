import React from "react";
import heroImg from "../../assets/image/hotel/hotel-hero.webp";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function HotelHero() {
  return (
    <div className="flex justify-center gap-10 px-6 py-10">
      <Image
        src={heroImg}
        alt="Hotel 1"
        className="w-[500px] object-cover rounded-xl"
      />

      <div className="w-[min(600px,90vw)] flex flex-col  gap-3">
        <h1 className="italic text-[clamp(2rem,2.5vw,4rem)] leading-[1.3] font-bold">
          Savor Every Bite Celebrate Every Moment
        </h1>

        <h4 className="text-xl font-semibold">
          Where every dish tells a story.
        </h4>
        <p>
          At our restaurant, every bite is crafted with care to create
          unforgettable moments. We believe that food is more than
          nourishment—it’s an experience that brings people together. From the
          freshest ingredients to unique flavor combinations, each dish tells a
          story that captures the essence of passion and tradition. Whether it’s
          a special occasion or a casual meal, we invite you to savor every
          moment and enjoy the journey of flavors with us.
        </p>

        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
