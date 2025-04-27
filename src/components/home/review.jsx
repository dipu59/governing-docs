import React, { useState } from "react";
import { GradientTitle } from "../Common/gradient-title";
import { Star } from "lucide-react";
import { ClientInfos } from "../../lib/database";
import { ClientInfo } from "./client-info.jsx";
import { cn } from "../../lib/utils/index.js";

export default function Reviews() {
  const [active, setActive] = useState(1);

  const activeReview = ClientInfos[active];

  return (
    <main className="md:my-[150px] my-[100px] py-[80px] bg-[#F6F6F6] px-4">
      <GradientTitle gradient="Our Client" className=" text-center ">
        Reviews From
      </GradientTitle>

      <div className="flex mt-[40px] flex-col md:flex-row justify-center items-center mx-auto  md:gap-[93px] gap-[30px] max-w-[1184px]">
        <div className="w-full gap-[20px] items-center text-primary flex h-[306px]">

          {/* Review Line */}
          <div
            className=" flex flex-col gap-[15px] justify-between items-center
          w-[5px]
          h-[306px]
          rounded-[20px]
          bg-[#E2DED8]

          "
          >
            {Array.from(Array(3).keys()).map((el) => <div key={el}  className={cn("w-[5px] h-[92px] rounded-[20px] bg-transparent", active === el && 'bg-gradient-primary' )}/>)}
           
          </div>

          {/* Reviw List */}
          <div className="flex-grow space-y-2 h-[306px]">
            {ClientInfos.map((info, index) => (
              <ClientInfo key={index}  active={active === index } onClick={() => setActive(index) }  {...info} />
            ))}
          </div>
        </div>

        {/* Reviews Details */}
        <div className="w-full">
          <h2 className="font-bold md:text-[30px] text-[22px] text-secondery">
           {activeReview.Review.title}
          </h2>
          <div className="flex gap-[4px] md:my-[30px] my-[20px]">
            {Array.from(Array(activeReview.Review.stars).keys()).map((el) => <Star key={el}  className="icon_orange "/>)}
          </div>
          <p className="text-sm md:text-base text-grya max-w-[500px] ">
           {activeReview.Review.disc}
          </p>
        </div>
      </div>
    </main>
  );
}
