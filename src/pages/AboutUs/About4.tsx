import Image from "next/image";
import React from "react";
import ogimage from "@/assets/image/blob-image.jpg";

function About4() {
  return (
    <div className="grid items-center grid-cols-3 ">

      <div className="grid ml-[130px] gap-4 ">
        <Image className="w-[250px] object-cover h-[200px]" alt="" src={ogimage} />
        <Image className="w-[250px] object-cover h-[200px]" alt="" src={ogimage} />
      </div>

      <div className="">
        <Image className="w-[200px] object-cover h-[300px]" alt="" src={ogimage} />
      </div>

      <div className="ml-[-200px] w-[550px]">
        <h1 className="text-8xl font-semibold">The Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, porro
          nihil vitae doloribus debitis sed commodi necessitatibus accusamus,
          ullam cumque incidunt consequatur molestias eius illo mollitia sint
          vel aut voluptatum?
        </p>
        <br />      
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          eligendi nihil, obcaecati quo ea iure reprehenderit! Deserunt
          aspernatur quas adipisci fugiat quisquam dolores, libero expedita
          ipsa, architecto nostrum debitis asperiores?
        </p>
      </div>
      
    </div>
  );
}

export default About4;
