import React from "react";
import CustomText from "components/typography/CustomText";

export default function HeaderButton({ children = "" }) {
  return (
    <CustomText
      variant="h4"
      className={`
      uppercase cursor-pointer
      border-b border-transparent hover:border-white
      transition-all duration-200
      py-1
      `}
    >
      {children}
    </CustomText>
  );
}
