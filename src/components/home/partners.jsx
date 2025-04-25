import React from "react";
import { GradientTitle } from "../Common/gradient-title";
import { PartnersInfo } from "../../lib/database";

export default function Partners() {
  return (
    <div className="bg-[#E6F9FD] rounded-3xl max-w-[1276px] mx-auto mb-[150px]  ">
      <div className="py-[50px]">
        <GradientTitle gradient="Partners" className="text-center">
          Our{" "}
        </GradientTitle>
        <ul className="flex justify-center items-center flex-wrap lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-[30px] max-w-[1200px] mx-auto text-center mt-10">
          {PartnersInfo.map((img, index) => (
            <li
              key={index}
              className="bg-white hover:shadow-lg duration-300 transition-all cursor-pointer h-[101px] rounded-[12px] border border-[#D6D6D6] py-[30px] px-[43px]"
            >
              <img src={img.logo} alt={img.alt} className="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
