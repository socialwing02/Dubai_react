import React from "react";
import Image from 'next/image';
import images from '@/assets/image/jason-briscoe-GliaHAJ3_5A-unsplash.jpg'

function Homepplinces2() {
  return (
    <div className="grid grid-cols-2">
      <div className="text-black p-10">
        <h1 className="text-3xl text-black font-bold ">Home</h1>
        <br />
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          beatae eos officia laboriosam obcaecati magnam et eum autem sequi
          illo, ab animi aliquid facilis recusandae repudiandae libero error
          ipsa veritatis.t
        </p>
        <br />
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          beatae eos officia laboriosam obcaecati magnam et eum autem sequi
          illo, ab animi aliquid facilis recusandae repudiandae libero error
          ipsa veritatis.t
        </p>
        <br />
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          beatae eos officia laboriosam obcaecati magnam et eum autem sequi
          illo, ab animi aliquid facilis recusandae repudiandae libero error
          ipsa veritatis.t
        </p>
      </div>
      <div className="">
     <Image className="w-[500px] h-auto" src={images} alt="Home Appliance" />
     </div>

     <div className="">
     <Image className="w-[500px] h-auto" src={images} alt="Home Appliance" />
     </div>
     <div className="p-10">
    
        <h1 className="text-3xl font-bold text-black">Home</h1>
        <br />
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          beatae eos officia laboriosam obcaecati magnam et eum autem sequi
          illo, ab animi aliquid facilis recusandae repudiandae libero error
          ipsa veritatis.t
        </p>
        <br />
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          beatae eos officia laboriosam obcaecati magnam et eum autem sequi
          illo, ab animi aliquid facilis recusandae repudiandae libero error
          ipsa veritatis.t
        </p>
        <br />
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          beatae eos officia laboriosam obcaecati magnam et eum autem sequi
          illo, ab animi aliquid facilis recusandae repudiandae libero error
          ipsa veritatis.t
        </p>
      </div>
      
    </div>

  );
}

export default Homepplinces2;
