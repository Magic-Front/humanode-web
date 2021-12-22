import React from "react";

export default function Body({ children = "" }) {
  return (
    <div id="page_container" className="flex-grow">
      {children}
    </div>
  );
}
