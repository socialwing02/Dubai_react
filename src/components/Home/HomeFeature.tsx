import Image from "next/image";
import React from "react";
import featureImg from "@/assets/image/blob-image.jpg";
import DoneIcon from "@mui/icons-material/Done";

export default function HomeFeature() {
  return (
    <section className="flex flex-col sm:flex-row justify-center gap-8 my-10 px-8">
      <div className="w-[min(700px,90vw)] flex flex-col gap-6">
        <h2 className="text-[clamp(2rem,2vw,4rem)] font-semibold">
          Empower your people
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad
          nesciunt? Sit possimus aut veniam aperiam perferendis officiis
          consequuntur eius nulla praesentium maiores autem, qui impedit.
          Repellat eligendi quia nobis.
        </p>

        <ul className="grid gap-4">
          <li className="flex gap-4">
            <DoneIcon />
            consequuntur eius nulla praesentium maiores autem, qui impedit.
          </li>
          <li className="flex gap-4">
            <DoneIcon />
            consequuntur eius nulla praesentium maiores autem, qui impedit.
          </li>
          <li className="flex gap-4">
            <DoneIcon />
            consequuntur eius nulla praesentium maiores autem, qui impedit.
          </li>
        </ul>
      </div>

      <Image src={featureImg} alt="" />
    </section>
  );
}
