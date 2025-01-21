import Image from "next/image";
import React from "react";
import Newimage from "@/assets/image/hotel/bike.webp";

function HotelCurveImage() {
  return (
    <div className="flex justify-center items-center gap-10 my-10 ">
      <Image className="w-[500px]" alt="" src={Newimage} />

      <div className="w-[min(500px,90vw)] grid gap-4">
        <h1 className="text-3xl font-bold">Exceptional Service Every Time</h1>
        <p className="">
          We are committed to providing more than just a meal—we deliver an
          experience. From the moment you step in, our attentive team ensures
          that every detail is taken care of. Whether it’s personalized service,
          thoughtful recommendations, or a warm and welcoming atmosphere, we
          strive to create an environment where every guest feels appreciated
          and well-served. Our dedication to exceptional service transforms
          every visit into a memorable journey, making every moment count.
        </p>
      </div>
    </div>
  );
}

export default HotelCurveImage;
