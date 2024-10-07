import { AboutMe } from "../components/AboutMe";
import { RoutingAccordeon } from "../components/RoutingAccordeon";
import { Heading } from "../components/Heading";
import { Stack } from "@mui/material";

export const WelcomePage = () => {
  return (
    <Stack spacing={4}>
      <Heading />
      <RoutingAccordeon />
      <AboutMe />
    </Stack>
  );
};
