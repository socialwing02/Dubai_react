import Image from "next/image";
import React from "react";
import detail1 from "@/assets/image/blob-image.jpg";
import { Button } from "../ui/Button";

export default function HomeDetails() {
  return (
    <div className="flex flex-col sm:flex-row gap-16 justify-center items-center my-10">
      <div className="details-grid">
        <div className="text-center text-white bg-gradient-to-b  from-[#61999a] to-[#88b2b0] p-2 px-4 rounded-md grid place-content-center">
          <h4 className="uppercase font-bold">hello there</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            non quod inventore
          </p>
        </div>
        <div className="text-center text-white bg-gradient-to-b  from-[#61999a] to-[#88b2b0] p-2 px-4 rounded-md grid place-content-center">
          <h4 className="uppercase font-bold">hello there</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            non quod inventore
          </p>
        </div>
        <Image
          className="h-full object-cover rounded-md"
          src={detail1}
          alt=""
        />
        <Image
          className="h-full object-cover rounded-md"
          src={detail1}
          alt=""
        />
      </div>

      <div className="w-[min(600px,90vw)] grid gap-5">
        <h3 className="text-[clamp(2rem,2vw,4rem)]">Designs were created</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est
          eum quae hic eos dolor consequatur quam ad, inventore veniam
          voluptatem! Maiores, similique. Quam quas sunt voluptatibus omnis quae
          ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          est eum quae hic eos dolor consequatur quam ad, inventore veniam
          voluptatem! Maiores, similique. Quam quas sunt voluptatibus omnis quae
          ex.
        </p>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
