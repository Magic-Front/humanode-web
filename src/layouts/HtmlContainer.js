import React from "react";

export default function HtmlContainer({
  children = "",
  background = "head-top",
}) {
  const [back, rect] = String(background).split(" ");
  return (
    <div
      className={`bg-${rect} bg-center bg-fixed bg-no-repeat bg-120 sm:bg-185`}
    >
      <div
        className={`
          min-h-screen
          sm:bg-${back} bg-${back}-sm
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
    </div>
  );
}
