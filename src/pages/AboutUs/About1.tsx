import Image from "next/image";
import React from "react";
import person from "@/assets/image/chef11.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function About1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-4 md:p-8">
 
      <div className="flex justify-center">
        <Image
          className="rounded-md h-[400px] md:ml-[80px] md:h-[550px] w-[400px] md:w-[300px] object-cover"
          src={person}
          alt="Person"
        />
      </div>


      <div className="flex flex-col md:ml-[-48px] items-center md:items-start">
        <Image
          className="w-[400px] h-[400px] hidden sm:block md:w-[270px] h-[250px] md:h-[420px] object-cover mb-4 rounded-md"
          src={person}
          alt="Person"
        />
        <div className="p-4 text-center text-green-200 bg-gray-600 rounded-md h-[100px] md:h-[120px] w-[400px] md:w-[270px]">
          <h1 className="text-xl md:text-2xl">25+</h1>
          <p className="text-sm md:text-xl">Years of Experience</p>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="p-6 bg-orange-200 rounded-md h-auto md:h-[550px] md:w-[500px] md:ml-[-230px] flex flex-col justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
          Innovative Strategies for Tax Prosperity
        </h1>

        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab
          eligendi at praesentium deleniti optio beatae eaque nisi tempore quae?
          Beatae facere impedit aspernatur vero laborum repellat voluptates
          suscipit mollitia.
        </p>

        <div className="grid md:grid-cols-2  gap-2 mt-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircleOutlineIcon />
              <h1 className="text-black">Impedit Aspernatur</h1>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-start mt-6">
          <button className="bg-violet-600 text-white px-4 py-2 rounded-md font-semibold text-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default About1;
