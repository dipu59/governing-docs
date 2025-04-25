import React from "react";
import { GradientTitle } from "../Common/gradient-title";
import left from "/lefticon.png";
import right from "/righticon.png";
import { ProblemInfo } from "../../lib/database";
const ProblemSolution = () => {
  return (
    <main className="max-w-[1182px] mx-auto lg:mt-[188px] md:mt-[120px] mt-[60px]  ">
      <div className="flex justify-between items-center">
        <h1>
          <GradientTitle gradient="Solution">Problem &</GradientTitle>
        </h1>
        <div className="flex gap-0">
          <img
            src={left}
            alt="Left Icon"
            className=" md:size-[70px] size-[50px] active:animate-bounce cursor-pointer transition-all duration-300"
          />
          <img
            src={right}
            alt="Right Icon"
            className=" md:size-[70px] size-[50px]"
          />
        </div>
      </div>
   
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[31px] transition-all pt-10">
        {ProblemInfo.map((items, index) => (
          <li
            key={index}
            className="problemShadow rounded-3xl p-[20px] hover:text-white transition-all group  duration-300 hover:bg-gradient-primary text-grya  cursor-pointer"
          >
            <img src={items.icon} alt="Problem and solution" />
            <p className="md:text-lg text-base font-bold font-heading md:py-5 py-4  group-hover:text-white duration-300 text-secondery">
              {items.name}
            </p>
            <p className="text-sm md:text-base font-normal pb-[10px] max-w-[232px] group-hover:text-white duration-300">
              {items.disc1}
            </p>
            <p className="text-sm md:text-base font-normal  max-w-[232px] group-hover:text-white duration-300">
              {" "}
              {items.disc2}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProblemSolution;
