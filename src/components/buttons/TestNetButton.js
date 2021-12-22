import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/testNetButton.svg";

export default function TestNetButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomImage src={image} alt="TestNet" />
    </div>
  );
}
