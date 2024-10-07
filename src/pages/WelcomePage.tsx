import { RoutingAccordeon } from "../components/RoutingAccordeon";
import { Heading } from "../components/Heading";
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
