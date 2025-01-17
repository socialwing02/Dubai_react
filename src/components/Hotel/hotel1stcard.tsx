import React from "react";
import images from "../../assets/image/food-image/burg.png";
import Image from "next/image";

function hotel1stcard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 m-4 md:m-8">
      {/* Image Section */}
      <div className="w-full md:w-[900px] lg:w-[1200px] xl:w-[1800px] text-white">
        <Image
          src={images}
          alt="Hotel 1"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      {/* Text Section */}
      <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h1 className="italic py-6 text-3xl md:text-5xl font-extrabold">
          WELCOME TO OUR RESTAURANT
        </h1>
        <p className="text-blue-800 text-lg md:text-2xl w-auto md:w-[42ch]">
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
