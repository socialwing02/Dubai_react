import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import carosuel1 from "@/assets/image/chef11.png";
import carosuel2 from "@/assets/carousel/file_2.webp";
import Image from "next/image";

function Travel4() {
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-cols-2">
        <Image alt="" src={carosuel1} className="w-[100px] h-[100px]" />
        <div className="">
          <h1 className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            inventore natus culpa praesentium, quibusdam non, doloremque a quasi
            quidem, blanditiis numquam odit optio nostrum obcaecati neque. Ipsa
            culpa ullam optio!
          </h1>
        </div>
      </div>

      <Carousel>
        <CarouselContent>
          <CarouselItem className="">
            <Image alt="" src={carosuel1} className="w-[600px] object-cover h-[500px]" />
          </CarouselItem>
          <CarouselItem className="">
            <Image src={carosuel2} className="w-[500px] h-[500px]" />{" "}
          </CarouselItem>
          <CarouselItem className="">
            <Image src={carosuel1} className="w-[800px] h-[500px]" />{" "}
          </CarouselItem>
          <CarouselItem className="">
            <Image src={carosuel2} className="w-[500px] h-[500px]" />{" "}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Travel4;
