import { Container, Grid, Stack } from "@mui/material";
import TextButton from "components/buttons/TextButton";
import Logo from "components/Logo";
import React from "react";

export default function MainHeader() {
  return (
    <div className="fixed w-screen pt-10">
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <TextButton to="/about">About</TextButton>
          </Grid>
          <Grid item className="absolute left-0 w-full">
            <Stack
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Logo />
              <Logo variant="text" />
            </Stack>
          </Grid>
          <Grid item>
            <TextButton to="/network">Network</TextButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
