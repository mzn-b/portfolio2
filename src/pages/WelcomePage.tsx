import { Heading } from "../components/welcome/Heading";
import { RoutingAccordeon } from "../components/welcome/RoutingAccordeon";
import { Stack } from "@mui/material";

export const WelcomePage = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Heading />
      <RoutingAccordeon />
    </Stack>
  );
};
