import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import accessoriesImg from "@/assets/image/mobile/accessiores.jpg";

export default function MobileAboutUs() {
  return (
    <section className="flex justify-center gap-10 my-10">
      <div className="w-[min(700px,90vw)] flex flex-col gap-4 ">
        <h4 className="font-semibold">About us</h4>
        <h2 className="text-[clamp(2rem,2vw,4rem)] font-bold">
          Delivery exceptional Services
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          voluptate officia neque omnis, incidunt mollitia vero animi ullam
          provident, nam et quasi ab repudiandae enim doloribus eveniet! Saepe,
          velit aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestias voluptate officia neque omnis, incidunt mollitia vero
          animi ullam provident, nam et quasi ab repudiandae enim doloribus
          eveniet! Saepe, velit aspernatur!
        </p>

        <h4 className="font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
          nulla. Magnam minima ducimus deleniti error sunt, quos voluptates
          optio eum.
        </h4>

        <div>
          <Button>Call now</Button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={accessoriesImg}
          alt=""
          className="w-[600px] h-[500px] object-cover rounded-lg"
          priority
        />
        <div className="absolute top-6 -right-[200px] grid gap-8">
          <div className="shadow-custom p-3 rounded-lg bg-white  w-[min(350px,90vw)] flex items-center  gap-2">
            <span>
              <AppRegistrationIcon fontSize="large" sx={{ color: "brown" }} />
            </span>

            <div className="">
              <h5 className="font-semibold">
                Lorem ipsum, dolor sit amet consectetur
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>

          <div className="shadow-custom p-3 rounded-lg bg-white  w-[min(350px,90vw)] flex items-center gap-2">
            <span>
              <AppRegistrationIcon fontSize="large" sx={{ color: "brown" }} />
            </span>

            <div className="">
              <h5 className="font-semibold">
                Lorem ipsum, dolor sit amet consectetur
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
          <div className="shadow-custom p-3 rounded-lg bg-white  w-[min(350px,90vw)] flex items-center gap-2">
            <span>
              <AppRegistrationIcon fontSize="large" sx={{ color: "brown" }} />
            </span>

            <div className="">
              <h5 className="font-semibold">
                Lorem ipsum, dolor sit amet consectetur
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
