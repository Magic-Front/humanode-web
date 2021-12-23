import Layout from "layouts";
import React from "react";
import AboutComponent from "./AboutComponent";

export default function About() {
  return (
    <Layout background="head-eye" maxWidth="xl" showHome>
      <AboutComponent />
    </Layout>
  );
}
