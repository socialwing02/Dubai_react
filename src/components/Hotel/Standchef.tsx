import Image from "next/image";
import React from "react";
import Standche from "../../assets/image/hotel/stantchef.png";

function Standchef() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      {/* Image Section */}
      <div className="w-[500px] md:w-auto flex justify-center mb-6 md:mb-0">
        <Image src={Standche} alt="" className="w-[min(400px,90vw)]" />
      </div>

      {/* Text Section */}
      <div className=" md:w-auto text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Stand Chef</h1>
        <p className="text-lg md:text-2xl py-4 md:py-7">
          The result of our company branding process is a comprehensive brand
          guideline that can be used to design a and other design assets like
          brand illustrations that reflect the new brand.
        </p>
      </div>
    </div>
  );
}

export default Standchef;
