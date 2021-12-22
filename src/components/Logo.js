import imageWhite from "assets/img/logo/logo-white.svg";
import image from "assets/img/logo/logo.svg";
import { APP_NAME } from "lib/global";
import React from "react";
import CustomImage from "./CustomImage";
import CustomText from "./typography/CustomText";

export default function Logo({ variant = "image", color = "primary" }) {
  return (
    <div>
      {variant === "image" ? (
        <CustomImage
          src={color === "white" ? imageWhite : image}
          alt={APP_NAME}
        />
      ) : (
        <CustomText variant="h3" className="uppercase">
          {APP_NAME}
        </CustomText>
      )}
    </div>
  );
}