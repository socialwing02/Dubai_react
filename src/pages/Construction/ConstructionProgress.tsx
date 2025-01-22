import React from "react";
import { Button } from "../../components/ui/Button";
import { Progress } from "../../components/ui/Progress";

export default function ConstructionProgress() {
  return (
    <section className="flex justify-center gap-16 bg-gray-100 py-16 my-10">
      <div className="w-[min(600px,90vw)] flex flex-col gap-4">
        <h3 className="text-[clamp(2rem,2.3vw,4rem)] text-balance ">
          Creative and Professional Skills and Experience Minds
        </h3>
        <p>
          We bring a combination of creativity and professionalism to every
          project we undertake. With a deep understanding of industry trends and
          a commitment to excellence, our team delivers innovative solutions
          tailored to meet unique needs. Our expertise spans various fields,
          ensuring that each step of the process is handled with precision and
          care. From concept to completion, we strive to exceed expectations,
          creating impactful and successful outcomes.
        </p>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>

      <div className="w-[min(500px,90vw)] flex flex-col gap-12">
        <ProgressBar value={50} title="Team Collaboration" />
        <ProgressBar value={80} title="Project Management" />
        <ProgressBar value={24} title="Technical Skills" />
        <ProgressBar value={78} title="Creativity and Innovation" />
      </div>
    </section>
  );
}

function ProgressBar({ value, title }: { value: number; title: string }) {
  return (
    <div>
      <h5 className="text-lg">{title}</h5>
      <div className="flex items-center gap-3">
        <Progress value={value} className="bg-white " />
        <span className="text-blue-500 font-semibold">{value}%</span>
      </div>
    </div>
  );
}
