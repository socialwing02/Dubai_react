import React from "react";
import showcase from "@/assets/image/showcase.jpg";
import Image from "next/image";
import { Button } from "@mui/material";

export default function SaloonShowcase() {
  return (
    <section className="relative  w-[min(900px,90vw)] py-16 sm:mb-[10rem] mx-auto px-4">
      <Image
        src={showcase}
        alt="Showcase"
        className="rounded-lg object-cover w-full h-[500px]"
      />

      <div className="lg:absolute top-[70%] left-[10%] transform lg:-translate-x-1/2 mt-10   lg:-translate-y-1/2  lg:w-[min(550px,90vw)]  bg-white rounded-lg shadow-lg p-8 border-2">
        <div className="grid gap-5">
          <h3 className="text-[clamp(1rem,1.1vw,3rem)] uppercase font-semibold">
            Curly Hair Salon
          </h3>

          <h1 className="text-[clamp(2rem,2.7vw,4rem)] font-bold">
            Book Your Appointment
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            delectus quia eveniet modi et magni iste, neque dolorum consectetur
            asperiores veritatis ab nulla reiciendis, obcaecati quibusdam sit
            qui expedita incidunt.
          </p>

          <Button>Book Now</Button>
        </div>
      </div>
    </section>
  );
}
