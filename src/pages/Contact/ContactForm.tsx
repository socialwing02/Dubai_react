import Input from "@/components/ui/Input";
import React from "react";
import contactImg from "../../assets/image/contact.jpg";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { X } from "@mui/icons-material";

export default function ContactForm() {
  return (
    <section className="relative  ">
      <div className="contact"></div>
      <div className=" absolute inset-0 mx-auto mt-[2rem] h-min p-6 w-[min(700px,90vw)]  border bg-white rounded-lg shadow-lg flex flex-col sm:flex-row justify-around ">
        <div>
          <div className="grid gap-1 pb-5">
            <h1 className="text-[clamp(2rem,2vw,4rem)]">Get in Touch</h1>
            <p>Let’s connect and make your experience seamless</p>
          </div>

          <div className=" grid gap-6">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              label="Name"
            />
            <Input
              type="email"
              name="Email"
              required
              placeholder="Enter your Email"
              label="Email"
            />
            <Input
              type="Phone"
              name="phone"
              placeholder="Enter your number"
              label="Phone"
            />

            <div className=" grid">
              <label htmlFor="">Message</label>

              <textarea
                rows={4}
                name=""
                id=""
                className="bg-gray-100 w-[min(280px,90vw)] rounded-md"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Image src={contactImg} alt="" className="w-[340px]" />

          <div className="flex justify-center items-center gap-3">
            <span className="hover:scale-[1.4] cursor-pointer transition-all duration-300">
              <WhatsAppIcon />
            </span>
            <span className="hover:scale-[1.4] cursor-pointer transition-all duration-300">
              <InstagramIcon />
            </span>
            <span className="hover:scale-[1.4] cursor-pointer transition-all duration-300">
              <X />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
