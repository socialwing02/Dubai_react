"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import carosuel1 from "@/assets/image/travels/carousel1.webp";
import carosuel2 from "@/assets/image/travels/carousel2.webp";
import carosuel3 from "@/assets/image/travels/carousel3.webp";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { travelCarouselContent } from "@/lib/constants";

function TravelsCarousel() {
  const autoPlay = useRef(Autoplay({ delay: 1000 }));

  return (
    <div className=" grid  grid-cols-2 gap-10 max-w-[80vw] items-center mx-auto my-10">
      <div className="w-[700px] grid gap-6">
        {travelCarouselContent.map((item, index) => (
          <div key={index} className="flex gap-10  ">
            <Image
              alt=""
              src={item.img}
              className="w-[80px] object-cover rounded-xl h-[80px]"
            />

            <p className="w-[50ch]">{item.text}</p>
          </div>
        ))}
      </div>

      <Carousel
        plugins={[autoPlay.current]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className=" h-[600px]">
          <CarouselItem className="basis-full h-[700px]">
            <Image
              className="w-full h-full object-contain"
              alt=""
              src={carosuel1}
            />
          </CarouselItem>
          <CarouselItem className="basis-full h-[700px] ">
            <Image
              className="w-full h-full object-contain"
              alt=""
              src={carosuel2}
            />
          </CarouselItem>
          <CarouselItem className="basis-full h-[700px]">
            <Image
              className="w-full h-full object-contain"
              alt=""
              src={carosuel3}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default TravelsCarousel;
