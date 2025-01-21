'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import carosuel1 from "@/assets/image/chef11.png";
import carosuel2 from "@/assets/carousel/file_2.webp";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Text = [
  { 
    Image: carosuel2 ,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  },
  { 
    Image: carosuel2 ,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  }, { 
    Image: carosuel2 ,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  }
]


function Travel4() {

    const autoPlay = useRef (Autoplay({delay:1000}));

  return (
    <div className=" grid  grid-cols-2 gap-10 max-w-[80vw] mx-auto my-10">
   
  <div className="w-[700px] grid gap-6">
  {Text.map ((item) =>(
               <div key={item.text} className="flex gap-10  ">
                   <Image alt="" src={carosuel1} className="w-[80px] object-cover h-[80px]" />
      
      <p className="w-[50ch]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        inventore natus culpa praesentium, quibusdam non, doloremque a quasi
        quidem, blanditiis numquam odit optio nostrum obcaecati neque. Ipsa
        culpa ullam optio dolor sit amet consectetur adipisicing  !
      </p>
  </div>
        )
    )}
  </div>
     

      <Carousel plugins={[autoPlay.current]} opts={{
        loop: true,
      }} >
        <CarouselContent>
          <CarouselItem className="basis-full">
            {/* <Image alt="" src={carosuel1}  /> */}
          </CarouselItem>
          <CarouselItem className="basis-full">
            <Image alt="" src={carosuel2} />{" "}
          </CarouselItem>
          <CarouselItem className="basis-full">
            {/* <Image alt="" src={carosuel1}  />{" "} */}
          </CarouselItem>
          <CarouselItem className="basis-full">
            <Image alt="image" src={carosuel2} />{" "}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Travel4;
