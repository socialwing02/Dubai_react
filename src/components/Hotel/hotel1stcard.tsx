import React from "react";
import images from "../../assets/image/hotel/Foodmain1.jpg";
import Image from "next/image";

function hotel1stcard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm: items-center bg-white justify-center px-6 py-10">

      <div className="w-full md:w-[900px] py-12 lg:w-[1200px] xl:w-[1800px] text-white">
        <Image
          src={images}
          alt="Hotel 1"
          className="  w-[500px] object-cover rounded-lg"
        />
      </div>

      <div className="md:mt-0 md:ml-1 text-center md:text-left">
        <h1 className="italic py-6 text-3xl md:text-5xl font-extrabold">
          WELCOME TO OUR RESTAURANT
        </h1>
        <p className="text-black text-lg md:text-2xl w-auto md:w-[42ch]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nam
          libero velit quos, inventore praesentium hic ratione accusantium,
          doloremque quam debitis magni ab assumenda at sit quidem esse ea
          tempore!
        </p>
      </div>
    </div>
  );
}

export default hotel1stcard;
