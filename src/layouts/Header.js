import { CssBaseline } from "@mui/material";
import React from "react";
import MainHeader from "./headers/MainHeader";

export default function Header({ isAuth = false, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainHeader />
    </React.Fragment>
  );
}
