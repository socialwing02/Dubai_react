import React from "react";
import AdsClickIcon from "@mui/icons-material/AdsClick";

export default function SupermarketCards() {
  return (
    <section className="flex justify-center gap-12 my-16">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          className="py-10 px-6  rounded-2xl w-[300px] flex flex-col items-center gap-2 shadow-custom"
          key={index}
        >
          <AdsClickIcon />
          <h4 className="text-xl font-semibold">Quality Products</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et
            repudiandae corrupti doloribus. Magni perferendis quasi est alias
          </p>
        </div>
      ))}
    </section>
  );
}
