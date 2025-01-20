import Image from "next/image";
import React from "react";
import Newimage from "@/assets/image/blob-image.jpg";

function HotelCurve() {
  return (
    <div className="grid h-[500px] bg-[#D7D9CC]  grid-cols-2">
{/* <div className="grid ] grid-cols-2"> */}
<Image
        className="w-[900px] mt-[80px] rounded-r-full h-[350px]"
        alt=""
        src={Newimage}
      />

      <div className="m-12 mt-[90px]">
        <h1 className="text-6xl text-black">This Is What . . .</h1>
        <p className="m-4 text-2xl font-extralight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          voluptatibus eaque rem odio quae fugiat atque quia laboriosam, animi
          architecto corrupti, vero repellendus obcaecati qui ex laborum ratione
          possimus minus!
        </p>
      </div>
</div>
    // </div>
  );
}

export default HotelCurve;
