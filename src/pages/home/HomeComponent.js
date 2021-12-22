import { Grid } from "@mui/material";
import PapersButton from "components/buttons/PapersButton";
import PathButton from "components/buttons/PathButton";
import TestNetButton from "components/buttons/TestNetButton";
import React from "react";

export default function HomeComponent() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <PapersButton />
      </Grid>
      <Grid item>
        <PathButton />
      </Grid>
      <Grid item>
        <TestNetButton />
      </Grid>
    </Grid>
  );
}
