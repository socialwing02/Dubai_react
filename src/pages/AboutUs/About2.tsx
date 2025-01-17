import React from "react";

function About2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="grid gap-3">
        {/* Vision Cards */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full md:w-[570px] mx-auto md:ml-[120px] h-auto rounded-md bg-red-100 p-4"
          >
            <button className="bg-white text-xl md:text-2xl font-semibold p-2 rounded-full">
              Our Vision
            </button>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              cum, ea dolores nulla obcaecati nemo consectetur error ipsum quae
              totam, vitae libero odio ut voluptatem rerum eos reiciendis
              consequatur impedit.
            </p>
          </div>
        ))}
      </div>
      
      {/* Plan Section */}
      <div className="w-full max-w-lg mx-auto md:ml-0 h-auto rounded-md bg-red-950 p-6">
        <h1 className="text-2xl md:text-4xl text-white font-semibold text-center md:text-right">
          Our Plan Makes You Feel More Comfortable in Tax Management
        </h1>
        <p className="mt-4 text-sm md:text-base text-white leading-relaxed text-center md:text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          illo quam consectetur? Consequuntur fugit illo, asperiores, odit
          veritatis temporibus illum, ad molestiae autem dolore eos molestias ex
          voluptate eum quidem?
        </p>
        <div className="flex justify-center md:justify-end mt-8">
          <button className="rounded-full bg-slate-600 text-white px-6 py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default About2;
