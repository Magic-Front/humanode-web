import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/pathButton.svg";
import CustomLink from "components/CustomLink";

export default function PathButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomLink to="/path">
        <CustomImage src={image} alt="Path" />
      </CustomLink>
    </div>
  );
}
