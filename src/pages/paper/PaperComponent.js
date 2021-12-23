import { ArrowBackIos } from "@mui/icons-material";
import { Box, Grid, Stack } from "@mui/material";
import TextButton from "components/buttons/TextButton";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function PaperComponent() {
  return (
    <div className="relative">
      <Box
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="absolute top-1/2"
      >
        <TextButton
          size="small"
          className="opacity-40"
          startIcon={<ArrowBackIos />}
          to="/"
        >
          Home
        </TextButton>
      </Box>
      <Grid container spacing={10} justifyContent="center" className="relative">
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pb-10" color="primary" variant="h4">
              PAPERS
            </CustomText>
            <TextButton size="small">WhitePaper</TextButton>
            <TextButton size="small">LightPaper</TextButton>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pb-10" color="primary" variant="h4">
              TL;DR
            </CustomText>
            <TextButton size="small">one-paper</TextButton>
            <TextButton size="small">factSheet</TextButton>
            <TextButton size="small">deck</TextButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
