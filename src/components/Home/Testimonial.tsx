import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import profile1 from "@/assets/image/home/testimonial-1.webp";
import profile2 from "@/assets/image/home/testimonial2.webp";
import profile3 from "@/assets/image/home/testimonial3.webp";

export default function Testimonial() {
  return (
    <section className="flex justify-center gap-[6rem] my-[4rem]">
      <article className="w-[min(600px,90vw)] mt-[9rem] flex flex-col gap-5">
        <h3 className="text-[clamp(2.5rem,2.5vw,4rem)] leading-[1.2] font-semibold">
          What our <br /> Customers says
        </h3>
        <p>
          Discover the joy of hassle-free grocery shopping! We bring you the
          freshest produce, pantry staples, and household essentials – all at
          unbeatable prices. Whether you're stocking up for the week or
          preparing for a special occasion, we've got you covered. With our
          easy-to-use platform and fast delivery, your favorite groceries are
          just a click away.
        </p>

        <div>
          <Button>Get Started</Button>
        </div>
      </article>

      <div className="flex flex-col  gap-8">
        <div className="relative p-6 border-l-8 border border-gray-400 w-[min(500px,90vw)] rounded-lg flex gap-6 ">
          <span className="absolute right-4 top-4">
            <FormatQuoteIcon fontSize="large" sx={{ color: "gray" }} />
          </span>

          <Image
            src={profile1}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />

          <div className="grid gap-2">
            <h5 className="text-xl capitalize font-semibold">mehwish</h5>
            <p className="">
              The restaurant offers a delightful variety of dishes, each
              prepared with fresh ingredients and exceptional flavor. A
              must-visit for food lovers
            </p>
          </div>
        </div>

        <div className="relative p-6 border-l-8 border border-l-gray-700 w-[min(500px,90vw)] -ml-20 rounded-lg flex gap-6 ">
          <span className="absolute right-4 top-4">
            <FormatQuoteIcon fontSize="large" sx={{ color: "gray" }} />
          </span>

          <Image
            src={profile2}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />

          <div className="grid gap-2">
            <h5 className="text-xl capitalize font-semibold">mehwish</h5>
            <p className="">
              I had an amazing experience! The food was outstanding, the travel
              services were smooth and hassle-free, and the salon provided
              exceptional services. Everything was handled with great attention
              to detail and professionalism. Highly recommended!
            </p>
          </div>
        </div>

        <div className="relative p-6 border-l-8 border border-gray-400 w-[min(500px,90vw)] rounded-lg flex gap-6 ">
          <span className="absolute right-4 top-4">
            <FormatQuoteIcon fontSize="large" sx={{ color: "gray" }} />
          </span>

          <Image
            src={profile3}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />

          <div className="grid gap-2">
            <h5 className="text-xl capitalize font-semibold">mehwish</h5>
            <p className="">
              Our travel experience was seamless from start to finish. The team
              ensured every detail was taken care of, making our trip
              stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
