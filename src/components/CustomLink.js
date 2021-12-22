import React from "react";
import { Link } from "react-router-dom";
import CustomText from "./typography/CustomText";

export default function CustomLink({
  to = "#",
  target = "",
  children = "",
  variant = "text",
  color = "default",
  className = "",
  fullWidth = false,
  textVariant,
  ...props
}) {
  const isInternal = !String(to).includes("http");
  const isText = typeof children === "string";

  const mainRender = isText ? (
    <CustomText color="inherit" variant={textVariant}>
      {children}
    </CustomText>
  ) : (
    children
  );

  return isInternal ? (
    <Link to={to} target={target} className={`${className}`}>
      {mainRender}
    </Link>
  ) : (
    <a
      href={to}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : ""}
      className={`${className}`}
    >
      {mainRender}
    </a>
  );
}
