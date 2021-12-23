import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import HtmlContainer from "./HtmlContainer";

export default function Layout({
  children = "",
  maxWidth = "md",
  background = "head-top",
  showHome = false,
}) {
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  return (
    <HtmlContainer background={background} showHome={showHome}>
      <Header isAuth={isAuth} />
      <Body>
        <Container maxWidth={maxWidth}>{children}</Container>
      </Body>
      <Footer />
    </HtmlContainer>
  );
}
