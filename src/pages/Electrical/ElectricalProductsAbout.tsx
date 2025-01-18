import React from "react";
import productAboutImg from "@/assets/image/electrical/productAbout.jpg";
import Image from "next/image";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

export default function ElectricalProductsAbout() {
  return (
    <section className="flex justify-center items-center gap-10 my-10">
      <Image src={productAboutImg} alt="" width={700} className="rounded-xl" />

      <div>
        <h2 className="text-[clamp(2rem,2vw,4rem)] capitalize py-6">
          Benefit from our products
        </h2>

        <div className="w-[min(65ch,90vw)] grid gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex gap-6">
              <AcUnitOutlinedIcon fontSize="large" />

              <div>
                <h4 className="text-[clamp(1rem,1.1vw,3rem)] font-semibold">
                  Online Progress
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, rem. Delectus soluta iusto ipsum voluptate quia, odit
                  dolor aperiam qui
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
