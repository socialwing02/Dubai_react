import React from "react";
import girl from "../../assets/image/hotel/girl.png";
import Image from "next/image";
import CHB from "../../assets/image/food-image/CH-B.png";
import CHB1 from "../../assets/image/food-image/CH-MASALA.png";
import CHB2 from "../../assets/image/food-image/H-B.png";
import CHB3 from "../../assets/image/food-image/burg.png";

const Hotel = () => {
  return (
    <div className="hotel ">
      {/* Main Section */}
      <div className="hotel__container h-[800px]   bg-orange-700  mt-[100px] flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
        <div className="hotel__info mt-[100] lg:mt-21 rounded-lg shadow-md p-6 lg:p-8 bg-blue-950 text-white h-auto lg:h-[450px] z-10 w-full lg:w-[500px] mb-8 lg:mb-0 lg:mr-[-100px]">
          <h2 className="hotel__name text-xl lg:text-2xl mb-4">
            HEALTHY EATING
          </h2>
          <h1 className="hotel_name text-3xl lg:text-5xl w-full lg:w-[20ch]">
            Delicious Dinners in Under 30 Minutes ...
          </h1>
        </div>
        <div className="hotel__image h-auto mt-[200px] w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
          <Image
            src={girl}
            alt="Hotel 1"
            className="h-[400px] w-[800px] rounded-lg   md:w-[800px] md:h-[600px] lg:w-[800px] object-cover"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="hotel__container flex flex-wrap justify-center gap-6 mt-[-40] px-4 lg:px-0">
        <div className="hotel__image h-[250px] w-[250px] md:h-[300px] md:w-[300px] bg-slate-600 rounded-3xl overflow-hidden">
          <Image
            src={CHB}
            alt="Hotel 1"
            className="h-full w-full hover:scale-150 transition-transform duration-100 object-cover"
          />
        </div>

        <div className="hotel__image h-[250px] w-[250px] md:h-[300px] md:w-[300px] bg-slate-600 rounded-3xl overflow-hidden">
          <Image
            src={CHB1}
            alt="Hotel 1"
            className="h-full w-full hover:scale-150 transition-transform duration-100 object-cover"
          />
        </div>

        <div className="hotel__image h-[250px] w-[250px] md:h-[300px] md:w-[300px] bg-slate-600 rounded-3xl overflow-hidden">
          <Image
            src={CHB2}
            alt="Hotel 1"
            className="h-full hover:scale-150 transition-transform duration-100 w-full object-cover"
          />
        </div>

        <div className="hotel__image h-[280px]  w-[280px] md:h-[300px] md:w-[300px] bg-slate-600 rounded-3xl overflow-hidden">
          <Image
            src={CHB3}
            alt="Hotel 1"
            className="h-full w-full hover:scale-150 transition-transform duration-200 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
