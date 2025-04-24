import { cn } from "../../lib/utils";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-3 sm:py-4 px-3.5 sm:px-[25px] bg-gradient-primary opacity-95 transition-all  hover:opacity-100 text-white rounded-full text-xs md:text-base active:scale-90 duration-300 hover:shadow-lg hover:shadow-sky-200",
        className
      )}
    >
      {children}
    </button>
  );
};
