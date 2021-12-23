import { Grid, Stack } from "@mui/material";
import TextButton from "components/buttons/TextButton";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function PaperComponent() {
  return (
    <Grid container spacing={10} justifyContent="center">
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
  );
}
