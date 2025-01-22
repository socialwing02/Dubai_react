import React from "react";
import evaluateImg from "@/assets/image/construction/construction-evaluate.webp";
import Image from "next/image";
import { Button } from "../../components/ui/Button";

export default function ConstructionEvaluateus() {
  return (
    <section className="flex justify-center gap-10 my-10">
      <Image src={evaluateImg} alt="" className="w-[500px] rounded-lg" />

      <div className="w-[min(600px,90vw)] mt-10 flex flex-col gap-4">
        <h2 className="text-[clamp(2rem,2vw,4rem)] font-semibold capitalize text-pretty">
          Transforming Spaces Building Futures
        </h2>
        <h4 className="border-l-4 pl-6 border-blue-700 rounded-full text-[clamp(1rem,1vw,4rem)] text-pretty font-semibold">
          Crafting timeless spaces with dedication and precision, Turning
          visions into lasting achievements.
        </h4>
        <p>
          We believe that every space should reflect your aspirations and
          enhance your life. Whether it's a home, office, or community project,
          we approach each build with attention to detail and a focus on
          quality. Our commitment is to deliver innovative and sustainable
          solutions that meet your specific needs while ensuring long-term
          value. With a passion for excellence, we transform concepts into
          reality, creating spaces that leave a lasting impression.
        </p>
        <div>
          <Button>Order now</Button>
        </div>
      </div>
    </section>
  );
}
