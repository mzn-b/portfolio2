import { Stack, Typography } from "@mui/material";

export const Heading = () => {
  return (
    <Stack sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Typography variant="h1">MAZEN</Typography>
      <Typography variant="h1">EL-SHAARAWI</Typography>
      <Typography variant="h3">
        Crafting Digital Solutions, One Line at a Time
      </Typography>
    </Stack>
  );
};
