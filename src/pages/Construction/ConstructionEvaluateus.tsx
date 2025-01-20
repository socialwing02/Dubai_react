import React from "react";
import evaluateImg from "@/assets/image/construction/construction-evaluate.webp";
import Image from "next/image";
import { Button } from "../../components/ui/Button";

export default function ConstructionEvaluateus() {
  return (
    <section className="flex justify-center gap-10 my-10">
      <Image src={evaluateImg} alt="" className="w-[600px] rounded-lg" />

      <div className="w-[min(600px,90vw)] mt-10 flex flex-col gap-4">
        <h2 className="text-[clamp(2rem,2vw,4rem)] font-semibold capitalize text-pretty">
          We Always think on your dream
        </h2>
        <h4 className="border-l-4 pl-6 border-blue-700 rounded-full text-[clamp(1rem,1vw,4rem)] text-pretty font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ut
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          perferendis blanditiis accusantium cum quos numquam a dolorum soluta,
          enim exercitationem aut error labore! Obcaecati, perferendis totam et
          vel alias vitae!
        </p>
        <div>
          <Button>Contact now</Button>
        </div>
      </div>
    </section>
  );
}
