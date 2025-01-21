import React from "react";
import imagee from "@/assets/image/chef11.png";
import Image from "next/image";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Travel5() {
  return (
    <div className="m-10 grid grid-cols-2">
      <div className=" ">
        <h1 className="text-3xl">
          Welcome to <b className="text-green-600" /> Tourist
        </h1>
        <br />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptates harum aut ab repellendus sapiente repellat incidunt
          explicabo accusantium nam ducimus numquam, dolores veniam dicta labore
          qui veritatis? Ratione, sunt.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          incidunt, exercitationem laborum ratione quasi corrupti odio ex quod
          hic, minus iste enim vitae consequuntur tempore animi. Quasi aperiam
          adipisci ad?
        </p>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde
          nam ex dicta fugit quidem dolorem, magni maxime magnam delectus quos
          repellat modi voluptatum, nostrum cupiditate quisquam iure, omnis
          quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          blanditiis praesentium esse? Voluptates unde aliquam quod
          necessitatibus porro explicabo, minima facere reprehenderit, nemo
          tempore similique? Assumenda corporis cupiditate at! Porro.
        </p>
      </div>
      <Image src={imagee} className="w-[500px] h-[500px] ml-[90px] mb-10" alt="" />
    </div>
  );
}

export default Travel5;
