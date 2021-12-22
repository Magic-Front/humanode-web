import { Grid, Stack } from "@mui/material";
import Logo from "components/Logo";
import React from "react";

export default function MainHeader() {
  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="p-2"
      >
        <Grid item></Grid>
        <Grid item>
          <Stack justifyContent="space-between" alignItems="center" spacing={2}>
            <Logo />
            <Logo variant="text" />
          </Stack>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}
