import Image from "next/image";
import React from "react";
import image1 from "@/assets/image/home/home-featue-1.webp";
import image2 from "@/assets/image/home/home-feature-2.webp";
import { Button } from "../ui/Button";
import { homefeaturesList } from "@/lib/constants";
import EastIcon from "@mui/icons-material/East";

export default function HomeFeatures() {
  return (
    <div className="flex flex-col sm:flex-row gap-16 justify-center items-center my-10">
      <div className="details-grid">
        <div className="text-center  text-white bg-gradient-to-b  from-[#61999a] to-[#88b2b0] p-2 px-4 rounded-md grid gap-2 place-content-center">
          <h4 className="uppercase font-bold">Innovation and Quality</h4>
          <p>
            We focus on delivering exceptional results through tailored
            strategies and dedicated collaboration.
          </p>
        </div>
        <div className="text-center text-white bg-gradient-to-b  from-[#61999a] to-[#88b2b0] p-2 px-4 rounded-md grid place-content-center">
          <h4 className="uppercase font-bold">
            Reliable Service, Exceptional Results
          </h4>
          <p>
            we help you navigate complexities and achieve your goals
            efficiently. Trust us to be your guide towards success
          </p>
        </div>
        <Image className="h-full object-cover rounded-md" src={image1} alt="" />
        <Image className="h-full object-cover rounded-md" src={image2} alt="" />
      </div>

      <div className="w-[min(600px,90vw)] flex flex-col gap-3">
        <h3 className="text-[clamp(2rem,2vw,4rem)] capitalize">
          Building Connections, Delivering Results
        </h3>

        <p>
          Building strong connections is at the heart of everything we do. By
          understanding your unique needs, we deliver results that exceed
          expectations. Our dedication to excellence ensures every project is
          handled with precision and care, helping you achieve your goals
          seamlessly expectations. Our dedication to excellence ensures every
          project is handled with precision and care, helping you achieve your
          goals seamlessly
        </p>
        <div>
          <div className="grid gap-3">
            <ul className="grid gap-3 ">
              {homefeaturesList.map((list, index) => (
                <li key={index} className="flex gap-4 items-center">
                  <EastIcon />
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-5 mt-6">
          <Button>Get Started</Button>
          <Button variant="outline">Call now</Button>
        </div>
      </div>
    </div>
  );
}
