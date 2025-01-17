import Image from "next/image";
import React from "react";
import profileImg from "@/assets/image/chef11.png";
import { Button } from "../ui/Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonial() {
  return (
    <section className=" flex  justify-around my-10">
      <article className="w-[min(600px,90vw)] mt-[9rem] flex flex-col gap-5">
        <h3 className="text-[clamp(2.5rem,2.5vw,4rem)] leading-[1.2] font-semibold">
          What our <br /> Customers says
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          pariatur. Doloremque voluptatum sed quos necessitatibus omnis amet
          culpa ab nisi nam reiciendis, molestias iste veritatis beatae quaerat
          vero dolores repellendus?
        </p>

        <div>
          <Button className="bg-gradient-to-tl from-orange-600 to-violet-600">
            Get Started
          </Button>
        </div>
      </article>

      <div className="flex flex-col  gap-8">
        <div className="relative p-6 border-l-8 border border-gray-400 w-[min(500px,90vw)] rounded-lg flex gap-6 ">
          <span className="absolute right-4 top-4">
            <FormatQuoteIcon fontSize="large" sx={{ color: "gray" }} />
          </span>

          <Image
            src={profileImg}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />

          <div className="grid gap-2">
            <h5 className="text-xl capitalize font-semibold">mehwish</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur quo optio, odit excepturi fuga eligendi
              atque repudiandae quam voluptatum velit, corporis possimus amet
              earum quibusdam, cupiditate illo. Sit, dolore.
            </p>
          </div>
        </div>

        <div className="relative p-6 border-l-8 border border-l-violet-500 w-[min(500px,90vw)] -ml-20 rounded-lg flex gap-6 ">
          <span className="absolute right-4 top-4">
            <FormatQuoteIcon fontSize="large" sx={{ color: "gray" }} />
          </span>

          <Image
            src={profileImg}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />

          <div className="grid gap-2">
            <h5 className="text-xl capitalize font-semibold">mehwish</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur quo optio, odit excepturi fuga eligendi
              atque repudiandae quam voluptatum velit, corporis possimus amet
              earum quibusdam, cupiditate illo. Sit, dolore.
            </p>
          </div>
        </div>

        <div className="relative p-6 border-l-8 border border-gray-400 w-[min(500px,90vw)] rounded-lg flex gap-6 ">
          <span className="absolute right-4 top-4">
            <FormatQuoteIcon fontSize="large" sx={{ color: "gray" }} />
          </span>

          <Image
            src={profileImg}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />

          <div className="grid gap-2">
            <h5 className="text-xl capitalize font-semibold">mehwish</h5>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur quo optio, odit excepturi fuga eligendi
              atque repudiandae quam voluptatum velit, corporis possimus amet
              earum quibusdam, cupiditate illo. Sit, dolore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
