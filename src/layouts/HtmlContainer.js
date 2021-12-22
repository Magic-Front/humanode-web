import React from "react";

export default function HtmlContainer({
  children = "",
  background = "head-top",
}) {
  return (
    <div
      className={`
      min-h-screen
      bg-${background}
      bg-cover bg-center bg-fixed
      flex flex-col items-stretch
      scroll-thumb
      transition-all duration-300
      `}
    >
      <div className="bg-head-top"></div>
      <div className="bg-head-top-sm"></div>
      <div className="bg-head-eye"></div>
      <div className="bg-head-eye-sm"></div>
      <div className="bg-head-eye-rect-sm"></div>
      {children}
    </div>
  );
}
