import React from "react";
import CustomText from "components/typography/CustomText";
import CustomLink from "components/CustomLink";
import { useLocation } from "react-router-dom";

export default function TextButton({
  children = "",
  to = "#",
  size = "medium",
  className = "",
  startIcon = "",
}) {
  const isActive = to === useLocation().pathname;

  return (
    <CustomLink to={to}>
      <CustomText
        variant={size === "small" ? "h5" : "h4"}
        className={`
          flex items-center
          uppercase cursor-pointer
          border-b ${
            isActive ? "border-white" : "border-transparent"
          } hover:border-white
          transition-all duration-200
          py-1 pl-2
          ${className}
        `}
      >
        {startIcon && <div className="mr-2">{startIcon}</div>}
        {children}
      </CustomText>
    </CustomLink>
  );
}
