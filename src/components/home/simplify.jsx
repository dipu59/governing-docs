import React from "react";
import { GradientTitle } from "../Common/gradient-title";
import { Button } from "../Common/button";

export default function Simplify() {
  return (
    <main className="lg:py-[56px] md:py-[46px] py-[36px] bg-gradient-primary max-w-[1184px] mx-auto rounded-[20px] ">
      <div className="flex flex-col md:flex-row md:justify-between pr-[69.5px] pl-[40.5px] items-center">
        <div>
          <GradientTitle className="text-white max-w-[566px]">
            Ready to Simplify Your Document Management?
          </GradientTitle>

          <p className="text-white font-bold text-sm md:text-base max-w-[566px] md:pt-[30px] pt-4">
            Sign up today and experience the power of AI-driven legal
            documentation.
          </p>
        </div>

        <div className="pt-6 md:pt-0">
          <Button className="text-secondery bg-white hover:animate-pulse ">Get Started Now</Button>
        </div>
      </div>
    </main>
  );
}
