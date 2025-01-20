import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import evaluateImg from "@/assets/image/electrical/electrical-evaluate.jpeg";
import Image from "next/image";

export default function ElectricalEvaluate() {
  return (
    <section className="flex justify-center my-16 gap-10">
      <div className="w-[min(700px,90vw)]">
        <h2 className="text-[clamp(2rem,2vw,4rem)] uppercase font-bold text-balance">
          Provide Accessiories with out product
        </h2>
        <div className="grid gap-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fugiat incidunt dolor praesentium voluptate maiores rem! Temporibus
            vitae harum architecto! Est, ratione fuga maiores accusantium
            temporibus perspiciatis reiciendis totam laudantium? vitae harum
            architecto! Est, ratione fuga maiores accusantium temporibus
            perspiciatis reiciendis totam laudantium?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            ad reiciendis sequi, ea vitae in id maxime cupiditate impedit ullam
            officiis tempora laudantium consectetur magnam placeat quae unde
            repudiandae. Recusandae
          </p>
        </div>

        <ul className="mt-6 grid gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex gap-3">
              <span className="bg-yellow-400 rounded-full w-7 h-7 flex justify-center items-center">
                <CheckOutlinedIcon fontSize="small" />
              </span>
              reiciendis sequi, ea vitae in id maxime cupiditate impedit ullam
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={evaluateImg}
        alt=""
        width={500}
        height={600}
        objectFit="cover"
        className="rounded-lg"
      />
    </section>
  );
}
