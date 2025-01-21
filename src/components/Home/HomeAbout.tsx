import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/image/home/home-about.webp";
import DoneIcon from "@mui/icons-material/Done";

export default function HomeAboutUs() {
  return (
    <section className="flex flex-col sm:flex-row justify-center gap-8 my-10 px-8">
      <div className="w-[min(700px,90vw)] flex flex-col gap-6">
        <h2 className="text-[clamp(2rem,2vw,4rem)] font-semibold uppercase">
          about us
        </h2>

        <p>
          Welcome to a hub where all your needs are met with convenience and
          excellence. From a wide selection of phone accessories and essential
          groceries to professional salon services, seamless travel solutions,
          expert construction, and the latest in electronics, we aim to provide
          a holistic experience. Our commitment is to deliver exceptional
          service, quality, and variety, ensuring that every visit brings you
          closer to the things that matter most.
        </p>

        <ul className="grid gap-4">
          <li className="flex gap-2">
            <DoneIcon />
            <div>
              <h3 className="font-bold text-xl">Our Mission</h3>
              <p>
                To offer a seamless and enjoyable experience by combining
                quality products and services that cater to your diverse
                lifestyle needs.
              </p>
            </div>
          </li>
          <li className=" flex gap-2">
            <DoneIcon />
            <div>
              <h3 className="font-bold text-xl">Our Values</h3>
              <p>
                Integrity, innovation, and customer satisfaction guide
                everything we do, ensuring you receive nothing but the best.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <DoneIcon />
            <div>
              <h3 className="font-bold text-xl">Customer Focus</h3>
              <p>
                We prioritize understanding your unique requirements to deliver
                personalized solutions that exceed expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <Image
        src={aboutImg}
        alt=""
        className="w-[500px]  h-[500px] object-cover rounded-lg"
      />
    </section>
  );
}
