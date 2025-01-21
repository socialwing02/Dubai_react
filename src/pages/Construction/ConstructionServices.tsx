import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";
import { constructionServiceContent } from "@/lib/constants";
export default function ConstructionServices() {
  return (
    <section className="my-10 ">
      <h3 className="text-center text-[clamp(2rem,2.5vw,4rem)] my-4">
        What we do
      </h3>
      <div className="flex justify-center gap-8">
        {constructionServiceContent.map((item, index) => (
          <div
            key={index}
            className="w-[420px] shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              key={item.title}
              src={item.img}
              alt=""
              className="h-[300px] object-cover rounded-tr-lg hover:scale-[1.1] transition-transform"
            />
            <div className="p-5 grid  gap-2">
              <h2 className="text-pretty text-2xl font-semibold">
                {item.title}
              </h2>
              <p>{item.content}</p>
              <div className="justify-self-end">
                <Button variant="ghost" className="text-blue-500 text-lg">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
