import { ArrowBackIos } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import TextButton from "components/buttons/TextButton";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function NetworkComponent() {
  return (
    <div className="relative">
      <div className="absolute top-1/2">
        <TextButton
          size="small"
          className="opacity-40"
          startIcon={<ArrowBackIos />}
        >
          Home
        </TextButton>
      </div>
      <Grid container spacing={10} justifyContent="center" className="relative">
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pb-10" color="primary" variant="h4">
              COMMUNITY:
            </CustomText>
            <TextButton size="small">Twitter</TextButton>
            <TextButton size="small">Telegram</TextButton>
            <TextButton size="small">Reddit</TextButton>
            <TextButton size="small">Github</TextButton>
            <TextButton size="small">Youtube</TextButton>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pb-10" color="primary" variant="h4">
              UPDATES:
            </CustomText>
            <TextButton size="small">Blog</TextButton>
            <TextButton size="small">Forum</TextButton>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pb-10" color="primary" variant="h4">
              WRITE TO:
            </CustomText>
            <TextButton size="small">core@humanode.io</TextButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
