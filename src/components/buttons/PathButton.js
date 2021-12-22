import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/pathButton.svg";

export default function PathButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomImage src={image} alt="Path" />
    </div>
  );
}
