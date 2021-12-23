import { Button, Grid, Stack } from "@mui/material";
import image from "assets/img/rects/rect-01-sm.svg";
import CustomImage from "components/CustomImage";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function AboutComponent() {
  return (
    <Stack spacing={3} alignItems="center" className="w-full">
      <Grid container spacing={10} justifyContent="center">
        <Grid item>
          <CustomText className="py-6" variant="h4">
            TESTNET
          </CustomText>
          <CustomText className="opacity-20" variant="h5">
            OCT 2021
          </CustomText>
        </Grid>
        <Grid item>
          <CustomImage src={image} />
        </Grid>
        <Grid item>
          <CustomText className="py-6" variant="h4">
            MAINNET
          </CustomText>
          <CustomText className="opacity-20" variant="h5">
            JUN 2022
          </CustomText>
        </Grid>
      </Grid>
      <CustomText className="py-4" variant="h4">
        FULL DECENTRALIZATION
      </CustomText>
      <CustomText className="opacity-20 pb-4" variant="h5">
        JUN 2026
      </CustomText>
      <Button variant="outlined" color="inherit">
        <span className="px-16">See More</span>
      </Button>
    </Stack>
  );
}
