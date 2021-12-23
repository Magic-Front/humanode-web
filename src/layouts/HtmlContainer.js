import { ArrowBackIos, Close } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import TextButton from "components/buttons/TextButton";
import CustomLink from "components/CustomLink";
import React from "react";

export default function HtmlContainer({
  children = "",
  background = "head-top",
  showHome = false,
}) {
  const [back, rect] = String(background).split(" ");
  return (
    <div
      className={`relative bg-${rect} bg-center bg-fixed bg-no-repeat bg-120 sm:bg-185`}
    >
      {showHome && (
        <Container maxWidth="xl" className="">
          <Box sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <div className="absolute top-1/2 sm-max:hidden">
              <TextButton
                size="small"
                className="opacity-40"
                startIcon={<ArrowBackIos />}
                to="/"
              >
                Home
              </TextButton>
            </div>
            <div className="absolute left-0 bottom-12 w-full flex justify-center sm:hidden">
              <CustomLink to="/">
                <IconButton size="small">
                  <Close fontSize="large" />
                </IconButton>
              </CustomLink>
            </div>
          </Box>
        </Container>
      )}
      <div
        className={`
          relative
          min-h-screen
          sm:bg-${back} bg-${back}-sm
          bg-cover bg-center bg-fixed
          flex flex-col items-stretch
          overflow-x-hidden
          scroll-thumb
          transition-all duration-300
        `}
      >
        <div className="bg-head-top sm:bg-head-top sm-max:bg-head-top"></div>
        <div className="bg-head-top-sm sm:bg-head-top-sm sm-max:bg-head-top-sm"></div>
        <div className="bg-head-eye sm:bg-head-eye sm-max:bg-head-eye"></div>
        <div className="bg-head-eye-sm sm:bg-head-eye-sm sm-max:bg-head-eye-sm"></div>
        <div className="bg-head-eye-rect-sm sm:bg-head-eye-rect-sm sm-max:bg-head-eye-rect-sm"></div>
        <div className="bg-rect-01 sm:bg-rect-01 sm-max:bg-rect-01"></div>
        <div className="bg-rect-02 sm:bg-rect-02 sm-max:bg-rect-02"></div>
        <div className="bg-rect-03 sm:bg-rect-03 sm-max:bg-rect-03"></div>
        {children}
      </div>
    </div>
  );
}
