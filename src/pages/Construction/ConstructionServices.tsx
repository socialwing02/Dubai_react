import Image from "next/image";
import React from "react";
import cardImg from "@/assets/image/construction/construction-evaluate.webp";
import { Button } from "@/components/ui/Button";
export default function ConstructionServices() {
  return (
    <section className="my-10 ">
      <h3 className="text-center text-[clamp(2rem,2.5vw,4rem)] my-4">
        What we do
      </h3>
      <div className="flex justify-center gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="w-[420px] shadow-lg rounded-lg overflow-hidden">
            <Image
              key={"index" + index}
              src={cardImg}
              alt=""
              className="h-[300px] object-cover rounded-tr-lg hover:scale-[1.1] transition-transform"
            />
            <div className="p-7 grid  gap-2">
              <h2 className="text-pretty text-2xl font-semibold">
                Creative and Professional Skills and Experience Minds
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                ex voluptatibus officia quo rerum, vel possimus quae voluptate
                deserunt quam aut ratione quia! Deserunt adipisci non quis
                dolor, quibusdam sint.
              </p>
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
