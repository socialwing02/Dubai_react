import React from "react";
import evaluateImg from "@/assets/image/mobile/accessiores.jpg";
import Image from "next/image";
import { AccountTreeTwoTone } from "@mui/icons-material";
import { Button } from "@/components/ui/Button";

export default function MobileEvaluate() {
  return (
    <section className="flex justify-center items-center gap-10 my-10">
      <Image src={evaluateImg} alt="" className="w-[700px] rounded-lg" />

      <div className="w-[min(600px)] p-2  grid gap-6">
        <h2 className="uppercase font-semibold text-[clamp(2rem,1.7vw,4rem)]">
          Best serivces were available in our shop
        </h2>

        <div className="flex items-center gap-3">
          <AccountTreeTwoTone />
          <h4 className="font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptate porro laboriosam  
          </h4>
        </div>

        <ul className="grid grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <li className="list-disc" key={index}>
              Lorem, ipsum dolor sit amet consectetu
            </li>
          ))}
        </ul>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          neque explicabo quam veniam repudiandae repellendus aspernatur facilis
          eveniet eius! Molestias doloribus quae repellendus similique deleniti
          beatae maiores et quo voluptas.
        </p>

        <div className="flex gap-4">
          <Button>Get started</Button>
          <Button variant="ghost">Call now</Button>
        </div>
      </div>
    </section>
  );
}
