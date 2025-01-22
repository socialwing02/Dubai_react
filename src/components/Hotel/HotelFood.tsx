import React from "react";
import bgImg from "../../assets/image/hotel/hotel-food-bgImg.webp";
import Image from "next/image";
import food1 from "@/assets/image/hotel/food5.webp";
import food2 from "@/assets/image/hotel/food2.webp";
import food3 from "@/assets/image/hotel/food3.webp";
import food4 from "@/assets/image/hotel/food4.webp";

const HotelFood = () => {
  return (
    <section className="bg-white ">
      {/* Main Section */}
      <div className="   bg-[#D7D9CC]  flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-0">
        <div className="relative my-10">
          <div className="absolute top-10 left-[-220px]  lg:mt-21 rounded-lg shadow-md p-6  bg-white text-black z-10 w-full lg:w-[400px] mb-8 lg:mb-0 lg:mr-[-100px]">
            <h2 className=" text-xl lg:text-3xl mb-4">
              Indulge in Every Flavor Create Every Memory
            </h2>
            <p>
              Every dish is crafted with passion and precision to offer an
              unforgettable culinary experience. From the first bite to the
              last, savor the rich flavors and embrace the moments that bring
              joy to your taste buds. Whether it’s a quick bite or a leisurely
              dining experience, we ensure each flavor is carefully balanced to
              create a memorable journey for every guest.
            </p>
          </div>
          <Image
            src={bgImg}
            alt="Hotel 1"
            className="w-[700px] object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="hotel__container flex flex-wrap justify-center gap-6 relative mt-[-90px] z-10">
        <div className="hotel__image h-[250px] w-[250px] md:h-[300px] md:w-[300px]  bg-white shadow-2xl rounded-3xl overflow-hidden">
          <Image
            src={food1}
            alt="Hotel 1"
            className="h-full w-full hover:scale-150 transition-transform duration-100 object-cover"
          />
        </div>

        <div className="hotel__image h-[250px]  md:h-[300px] w-[300px] bg-white shadow-2xl rounded-3xl overflow-hidden">
          <Image
            src={food2}
            alt="Hotel 1"
            className="h-full w-full hover:scale-150 transition-transform duration-100 object-cover"
          />
        </div>

        <div className="hotel__image h-[250px] w-[250px] md:h-[300px] md:w-[300px]  bg-white shadow-xl rounded-3xl overflow-hidden">
          <Image
            src={food3}
            alt="Hotel 1"
            className="h-full hover:scale-150 transition-transform duration-100 w-full object-cover"
          />
        </div>

        <div className="hotel__image h-[280px]  w-[280px] md:h-[300px] md:w-[300px] bg-white shadow-xl rounded-3xl overflow-hidden">
          <Image
            src={food4}
            alt="Hotel 1"
            className="h-full w-full hover:scale-150 transition-transform duration-200 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HotelFood;
