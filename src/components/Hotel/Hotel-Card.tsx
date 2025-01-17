import React from "react";

function HotelCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-5 m-4 md:m-8">
      {/* First Section */}
      <div className="w-full py-8 m-8 md:w-[60ch] bg-orange-600 p-4 rounded-lg shadow-md text-white mb-6 md:mb-0">
        <p>
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing. Law others theirs passed but
          wishes. You day real less till dear read. Considered use dispatched
          melancholy sympathize discretion led. Oh feel if up to till like. He
          an thing rapid these after going drawn or
          <br />
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Oh feel if up to till like. He an thing rapid these
          after going drawn orYou day real less till dear read. Considered use
          dispatched melancholy sympathize discretion led. Oh feel if up to till
          like.You day real less till dear read. Considered use dispatched
          melancholy sympathize discretion led.
        </p>
      </div>

      {/* Second Section */}
      <div className="w-full md:w-auto bg-white rounded-lg text-gray-800">
        <div className=" py-8 md:m-6">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-5 font-extrabold text-red">
            Weight loss nutrition plan
          </h2>
          <p className="text-lg md:text-2xl mb-4 md:mb-5">
            The result of our company branding process is a comprehensive brand
            guideline that can be used to design a and other design assets like
            brand illustrations that reflect the new brand.
          </p>
        </div>

        {/* Nested Flex Section */}
        <div className="flex  flex-col md:flex-row">
          <div className="shadow-md h-auto md:h-[200px] w-full md:w-[360px] lg:w-[400px] bg-gray-200 rounded-lg p-4 mb-4 md:mb-0 md:mr-4">
            <h3>Sample Headline</h3>
            <p>
              Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor.
            </p>
          </div>

          <div className="shadow-md h-auto md:h-[200px] w-full md:w-[360px] lg:w-[400px] bg-gray-200 rounded-lg p-4">
            <h3>Sample Headline</h3>
            <p>
              Justo donec enim diam vulputate ut pharetra. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
