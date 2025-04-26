import React from "react";
import { GradientTitle } from "../Common/gradient-title";
import { Star } from "lucide-react";
import { ClientInfos } from "../../lib/database";
import { ClientInfo } from "./ClientInfo.jsx";

export default function Reviews() {
  return (
    <main className="my-[150px] py-[80px] bg-[#F6F6F6] ">
      <GradientTitle gradient="Our Client" className=" text-center ">
        Reviews From
      </GradientTitle>


      <div className="flex mt-[40px] flex-col md:flex-row justify-center items-center mx-auto  gap-[93px] max-w-[1184px]">


        <div className="w-full gap-[20px] items-center text-primary flex h-[306px]">

          <div className="
          w-[5px]
          h-[306px]
          rounded-[20px]
          bg-[#E2DED8]
          "></div>
          <div className="flex-grow space-y-2">
            {ClientInfos.map((info, index) => (
              <ClientInfo key={index} {...info} />
            ))}
          </div>
        </div>

      {/* Reviews */}
        <div className="w-full">
        <h2 className="font-bold md:text-[30px] text-[22px] text-secondery">
            It Was A Amazing Experiance!
          </h2>
          <div className="flex gap-[4px] my-[30px]">
          <Star className="icon_orange "/>
          <Star className="icon_orange "/>
          <Star className="icon_orange "/>
          <Star className="icon_orange "/>
          </div>
          <p className="text-sm md:text-base text-grya max-w-[500px] ">The AI features saved us countless hours and ensured our compliance was spot on.</p>
        </div>
      </div>
    </main>
  );
}
