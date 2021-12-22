import React from "react";

export default function HtmlContainer({ children = "", background = "left" }) {
  return (
    <div className={`min-h-screen bg-head-top bg-cover bg-center bg-fixed`}>
      {children}
    </div>
  );
}
