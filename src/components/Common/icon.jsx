import React from "react";
import { cn } from "../../lib/utils";

export const Icon = ({ children , className }) => {
    return <a href="/" className={cn("block text-[18px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold lg:py-[21.5px] py-[15px] font-heading ", className)}>{children}</a>;
};