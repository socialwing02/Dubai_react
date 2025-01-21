import { title } from "process";
import React from "react";

const Card = [
  {
    title: "Sample Headline",
    description:
      "Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Venenatis lectusmagna fringilla urna porttitor rhoncus dolor.",
  },
  {
    title: "Sample Headline",
    description:
      "Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Venenatis lectusmagna fringilla urna porttitor rhoncus dolor.",
  },
  {
    title: "Sample Headline",
    description:
      "Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Venenatis lectusmagna fringilla urna porttitor rhoncus dolor.",
  },
  {
    title: "Sample Headline",
    description:
      "Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Venenatis lectusmagna fringilla urna porttitor rhoncus dolor.",
  },
  {
    title: "Sample Headline",
    description:
      "Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Venenatis lectusmagna fringilla urna porttitor rhoncus dolor.",
  },
  {
    title: "Sample Headline",
    description:
      "Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Venenatis lectusmagna fringilla urna porttitor rhoncus dolor.",
  },
];

function HotelCard() {
  return (
    <div className="md:flex  bg-white justify-center py-5  ">
      {/* First Section */}
      <div className="w-[50ch] py-8 m-8 md:w-[70ch] bg-[#91A1A4] p-4 rounded-lg shadow-md text-white  md:mb-0">
        <p>
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing. Law others theirs passed but
          wishes. You day real less till dear read. Considered use dispatched
          melancholy sympathize discretion led. Oh feel if up to till like. He
          an thing rapid these after going drawn or
          <br />
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Oh feel if up to till like. He an thing rapid these
          after going drawn orYou day real less till dear read. Considered use
          dispatched melancholy sympathize discretion led. Oh feel if up to till
          like.You day real less till dear read. Considered use dispatched
          melancholy sympathize discretion led.
        </p>
      </div>

      {/* Second Section */}
      <div className="w-full  md:w-auto md:m-8 bg-white rounded-lg text-gray-800">
        <div className=" px-8 items-center md:m-6">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-5 font-extrabold text-red">
            Weight loss nutrition plan
          </h2>
          <p className="text-lg md:text-2xl mb-4 md:mb-5">
            The result of our company branding process is a comprehensive brand
            guideline that can be used to design a and other design assets like
            brand illustrations that reflect the new brand.
          </p>
        </div>

        {/* Nested Flex Section */}
        <div className="grid items-center m-2 gap-[40px]  md:grid-cols-3  ">
          {Card.map((item) => (
            <div
              key={item.title}
              className="shadow-md h-auto md:h-[180px] w-full  lg:w-[300px] bg-gray-200 rounded-lg p-2"
            >
              <h3 className="text-xl p-1 ">{item.title}</h3>
              <p className="p-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
