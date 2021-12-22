import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/papersButton.svg";

export default function PapersButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomImage src={image} alt="Papers" />
    </div>
  );
}
