import { Grid } from "@mui/material";
import PapersButton from "components/buttons/PapersButton";
import PathButton from "components/buttons/PathButton";
import TestNetButton from "components/buttons/TestNetButton";
import React from "react";

export default function HomeComponent() {
  return (
    <div className="sm-max:absolute bottom-12 w-full">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className="pr-4">
          <PapersButton />
        </Grid>
        <Grid item className="px-4">
          <PathButton />
        </Grid>
        <Grid item className="pl-4">
          <TestNetButton />
        </Grid>
      </Grid>
    </div>
  );
}
