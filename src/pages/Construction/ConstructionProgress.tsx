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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint sit
          adipisci aliquam, nam aut laudantium necessitatibus? Natus, impedit.
          Laboriosam ipsam vel ea nisi. Adipisci, nemo! Quibusdam sint aliquam
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          sint sit adipisci aliquam, nam aut laudantium necessitatibus? Natus,
          impedit. Laboriosam ipsam vel ea nisi. Adipisci, nemo! Quibusdam sint
          aliquam deleniti.
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
