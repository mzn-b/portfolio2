import { Button, Stack } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const RoutingAccordeon = () => {
  return (
    <Stack direction={"row"}>
      <RoutingButton route={"about"} text={"About Me"} />
      <RoutingButton route={"projects"} text={"Projects"} />
      <RoutingButton route={"contact"} text={"Contact"} />
    </Stack>
  );
};

const RoutingButton: FC<{ route: string; text: string }> = ({
  route,
  text,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      sx={{
        color: "#1ae8e8",
        fontSize: "1.2rem",
        fontWeight: "400",
      }}
      onClick={() => navigate(route)}
    >
      {text}
    </Button>
  );
};
