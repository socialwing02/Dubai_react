import React from "react";
import RoundImage from "@/assets/image/blob-image.jpg";
import Image from "next/image";
import back from "@/assets/image/model1.jpg";


function AboutFirst() {
  return (
    <div className="min-h-screen text-white relative">
      <Image
        src={back}
        alt="Background Image"
        className="absolute z-[-10]"
        layout="fill"
        objectFit="cover"
      />

      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-10">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            className="w-[200px] md:w-[250px] mt-10 rounded-full lg:rounded-full h-[200px] md:h-[400px] object-cover"
            alt="Chef Image"
            src={RoundImage}
           />
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:mt-[50px] mt-10 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold">
            Comprehensive SEO & Digital Marketing Solution
          </h1>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni
            quod odio? Maiores, delectus quos tenetur sint, impedit nulla sunt,
            magni eius ab culpa nesciunt dicta perspiciatis nobis repudiandae
            ipsa.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center hidden sm:block md:mt-[300px] md:justify-start">
          <Image 
            className="w-[200px] md:w-[250px] mt-10  rounded-full h-[200px] md:h-[400px] object-cover"
            alt="Chef Image"
            src={RoundImage}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutFirst;
