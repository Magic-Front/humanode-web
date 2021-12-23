import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/testNetButton.svg";
import imageSm from "assets/svg/testNetButtonSm.svg";
import CustomLink from "components/CustomLink";

export default function TestNetButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomLink to="#">
        <div className="sm-max:hidden">
          <CustomImage src={image} alt="TestNet" />
        </div>
        <div className="sm:hidden">
          <CustomImage src={imageSm} alt="Papers" />
        </div>
      </CustomLink>
    </div>
  );
}
