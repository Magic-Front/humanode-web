import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/testNetButton.svg";
import CustomLink from "components/CustomLink";

export default function TestNetButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomLink to="/testnet">
        <CustomImage src={image} alt="TestNet" />
      </CustomLink>
    </div>
  );
}
