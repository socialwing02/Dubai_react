import { hotelCardcontent } from "@/lib/constants";
import React from "react";

function HotelCard() {
  return (
    <section className="flex  flex-col gap-8 my-16  items-center text-center">
      <div className="w-[min(800px,90vw)] ">
        <h2 className="text-[clamp(2rem,2.2vw,4rem)] leading-[1.4] font-extrabold text-red">
          Creating Unforgettable Culinary Journeys with Every Bite
        </h2>
        <p className="">
          At our restaurant, we believe that every meal should be an experience
          to cherish. From the freshest ingredients to meticulous preparation,
          we ensure that every dish tells a story. Whether you’re enjoying a
          casual dinner or a special celebration, our goal is to provide
          exceptional flavors, warm hospitality, and a memorable atmosphere. We
          take pride in crafting meals that not only satisfy your taste buds but
          also create lasting memories. Every bite is a reflection of our
          dedication to quality, innovation, and creating moments worth
          savoring.
        </p>
      </div>

      <div className="flex gap-10 justify-center ">
        <div>
          <div className="w-[40ch]  bg-[#91A1A4] px-5  py-6 rounded-lg shadow-md text-white">
            <p>
              Indulge in a decadent journey of flavors with our handcrafted
              desserts, designed to elevate your dining experience. From rich,
              velvety cakes and creamy, luscious mousses to light, refreshing
              pastries and exquisite confections, every dessert is created with
              passion and precision. Each bite is a celebration of sweetness,
              texture, and harmony, ensuring a truly memorable conclusion to
              your meal. <br /> <br /> Whether you’re in the mood for something
              indulgent or a delicate, subtly sweet treat, our desserts offer
              the perfect balance of flavors that will leave you craving more.
              We take pride in curating a selection that caters to every palate,
              offering an array of options that are both innovative and
              timeless. Experience the perfect blend of artistry and flavor with
              every dessert—an experience that lingers long after the last bite.
            </p>
          </div>
        </div>

        <div className=" grid  gap-6  md:w-auto  rounded-lg text-gray-800">
          {/* Nested Flex Section */}
          <div className="grid justify-center  gap-8  md:grid-cols-[repeat(3,330px)]  ">
            {hotelCardcontent.map((item) => (
              <div
                key={item.title}
                className="shadow-md  bg-gray-200 rounded-lg px-3 py-5"
              >
                <h3 className="text-xl font-semibold ">{item.title}</h3>
                <p className="p-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelCard;
