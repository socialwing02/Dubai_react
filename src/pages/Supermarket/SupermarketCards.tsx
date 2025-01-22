import React from "react";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { supermarketCardsContent } from "@/lib/constants";

export default function SupermarketCards() {
  return (
    <section className="flex justify-center gap-12 my-16">
      {supermarketCardsContent.map((item) => (
        <div
          className="py-10 px-6 text-center  rounded-2xl w-[300px] flex flex-col items-center gap-2 shadow-custom"
          key={item.title}
        >
          <AdsClickIcon />
          <h4 className="text-xl font-semibold">{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}
