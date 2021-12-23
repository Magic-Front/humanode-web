import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/papersButton.svg";
import CustomLink from "components/CustomLink";

export default function PapersButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomLink to="/paper">
        <CustomImage src={image} alt="Papers" />
      </CustomLink>
    </div>
  );
}
