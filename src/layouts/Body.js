import React from "react";

export default function Body({ children = "" }) {
  return (
    <div
      id="page_container"
      className="flex-grow flex flex-col justify-center items-stretch"
    >
      {children}
    </div>
  );
}
