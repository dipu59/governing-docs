import React, { Children } from "react";

export function Gradient({ children }) {
  return (
      <span className="bg-gradient-primary  bg-clip-text text-transparent">
          {children}
      </span>
  );
}
