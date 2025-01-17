import React from "react";

import chooseImg from "@/assets/image/blob-image.jpg";
import Image from "next/image";

export default function HomeChooseUs() {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-center gap-6  my-10 px-8">
      <div className="grid gap-6">
        <h3 className="text-[clamp(2rem,2vw,4rem)]">Why choose us ? </h3>

        <article className="grid grid-cols-1  sm:grid-cols-[repeat(2,400px)] gap-8">
          <div className="flex gap-4">
            <h4 className="text-4xl font-bold text-blue-800 ">01</h4>

            <div>
              <h5 className="font-semibold text-xl">Responsive Designs</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident enim voluptas vitae deleniti. Nostrum, illo
                reiciendis. Assumenda, amet dolorum rem perferendis aliquid quos
                quod soluta! Temporibus aliquid dicta illo amet.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <h4 className="text-4xl font-bold text-blue-800 ">02</h4>
            <div>
              <h5 className="font-semibold text-xl">Unique Layout</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident enim voluptas vitae deleniti. Nostrum, illo
                reiciendis. Assumenda, amet dolorum rem perferendis aliquid quos
                quod soluta! Temporibus aliquid dicta illo amet.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <h4 className="text-4xl font-bold text-blue-800 ">03</h4>
            <div>
              <h5 className="font-semibold text-xl">Clean Design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident enim voluptas vitae deleniti. Nostrum, illo
                reiciendis. Assumenda, amet dolorum rem perferendis aliquid quos
                quod soluta! Temporibus aliquid dicta illo amet.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <h4 className="text-4xl font-bold text-blue-800 ">04</h4>
            <div>
              <h5 className="font-semibold text-xl">Right Solution</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident enim voluptas vitae deleniti. Nostrum, illo
                reiciendis. Assumenda, amet dolorum rem perferendis aliquid quos
                quod soluta! Temporibus aliquid dicta illo amet.
              </p>
            </div>
          </div>
        </article>
      </div>
      <Image src={chooseImg} alt="" className="rounded-lg w-[550px]" />
    </section>
  );
}
