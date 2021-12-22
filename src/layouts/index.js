import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Body from "./Body";
import HtmlContainer from "./HtmlContainer";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children = "",
  fullWidth = false,
  background = "head-top",
}) {
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  return (
    <HtmlContainer background={background}>
      <Header isAuth={isAuth} />
      <Body>
        {Boolean(fullWidth) ? children : <Container>{children}</Container>}
      </Body>
      <Footer />
    </HtmlContainer>
  );
}
