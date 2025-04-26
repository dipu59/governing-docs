import React from "react";
import { Button } from "../Common/button";
import hero from "/hero-side.svg";
function Hero() {
  return (
    <section className="flex lg:flex-row flex-col-reverse  justify-between items-center gap-3 px-3 lg:pt-[142px] md:pt-[100px] sm:pt-[50px] pt-[40px]">
      <div className=" lg:space-y-[29px] md:space-y-[20px] mt-10 lg:mt-0 space-y-3 lg:pl-[128px]">
        <h1 className="font-bold 2xl:text-[60px] lg:text-[55px] md:text-[50px] text-[33px] sm:text-[40px]  max-w-[593px] font-heading text-secondery  leading-snug">
          Simplify Your Real Estate Document Analysis
        </h1>
        <p className="lg:text-xl md:text-lg sm:text-base text-sm max-w-[519px] text-secondery font-semibold font-default">
          Streamline, Automate, and Secure Your Business Documents with Ai
          GoverningDocs
        </p>
        <Button>Get Started Today</Button>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
}

export default Hero;
