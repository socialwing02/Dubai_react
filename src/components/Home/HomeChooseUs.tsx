import React from "react";

import chooseImg from "@/assets/image/home/home-choose-img.webp";
import Image from "next/image";
import { chooseUsContent } from "@/lib/constants";

export default function HomeChooseUs() {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-center gap-16  my-16 ">
      <div className="grid gap-6">
        <h3 className="text-[clamp(2rem,2vw,4rem)]">
          Your Go-To Destination for Everything
        </h3>

        <article className="grid grid-cols-1  sm:grid-cols-[repeat(2,360px)] gap-8">
          {chooseUsContent.map((item, index) => (
            <div className="flex gap-4" key={item.title}>
              <h4 className="text-4xl font-bold text-red-600">0{index + 1}</h4>

              <div>
                <h5 className="font-semibold text-xl text-pretty">
                  {item.title}
                </h5>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
      <Image
        src={chooseImg}
        alt=""
        className="rounded-lg w-[500px] object-cover"
      />
    </section>
  );
}
