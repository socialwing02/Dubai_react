"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

import image1 from "@/assets/carousel/file_1.webp";
import image2 from "@/assets/carousel/file_2.webp";
import image3 from "@/assets/carousel/file_3.webp";
import Autoplay from "embla-carousel-autoplay";

export default function ExampleCarousel() {
  const autoplayRef = useRef(Autoplay({ delay: 2000 }));

  return (
    <section className="relative my-10">
      <Carousel
        className="w-full max-w-[1700px] mx-auto"
        plugins={[autoplayRef.current]}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Image src={image1} alt="Slide 1" className="rounded-lg" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={image2} alt="Slide 2" className="rounded-lg" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={image3} alt="Slide 3" className="rounded-lg" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={image3} alt="Slide 3" className="rounded-lg" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={image3} alt="Slide 3" className="rounded-lg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
}
