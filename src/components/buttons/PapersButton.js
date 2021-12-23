import React from "react";
import CustomImage from "components/CustomImage";
import image from "assets/svg/papersButton.svg";
import imageSm from "assets/svg/papersButtonSm.svg";
import CustomLink from "components/CustomLink";

export default function PapersButton() {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomLink to="/paper">
        <div className="sm-max:hidden">
          <CustomImage src={image} alt="Papers" />
        </div>
        <div className="sm:hidden">
          <CustomImage src={imageSm} alt="Papers" />
        </div>
      </CustomLink>
    </div>
  );
}
