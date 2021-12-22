import { Container, Grid, Stack } from "@mui/material";
import HeaderButton from "components/buttons/HeaderButton";
import Logo from "components/Logo";
import React from "react";

export default function MainHeader() {
  return (
    <div className="fixed w-screen py-5">
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <HeaderButton> About</HeaderButton>
          </Grid>
          <Grid item>
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
            <HeaderButton> Network</HeaderButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
