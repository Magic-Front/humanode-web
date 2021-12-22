import React from "react";
import CustomText from "components/typography/CustomText";
import CustomLink from "components/CustomLink";
import { useLocation } from "react-router-dom";

export default function HeaderButton({ children = "", to = "#" }) {
  const isActive = to === useLocation().pathname;

  return (
    <CustomLink to={to}>
      <CustomText
        variant="h4"
        className={`
      uppercase cursor-pointer
      border-b ${
        isActive ? "border-white" : "border-transparent"
      } hover:border-white
      transition-all duration-200
      py-1
      `}
      >
        {children}
      </CustomText>
    </CustomLink>
  );
}
