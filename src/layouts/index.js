import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Body from "./Body";
import HtmlContainer from "./HtmlContainer";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children = "", fullWidth = false }) {
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  const bodyContent = <Body>{children}</Body>;

  return (
    <HtmlContainer>
      <Header isAuth={isAuth} />
      {Boolean(fullWidth) ? bodyContent : <Container>{bodyContent}</Container>}
      <Footer />
    </HtmlContainer>
  );
}