import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { ChangeEvent, FC, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const CustomContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack>
      <Stack
        sx={{
          padding: 2,
          margin: 2,
          marginBottom: 0,
          borderRadius: 4,
          backgroundColor: "#2a3540",
        }}
        direction={"row"}
        spacing={"auto"}
      >
        <Typography variant={"h4"}>Mazen El-shaarawi</Typography>
        <Stack direction={"row"} spacing={1}>
          <NavigationButton route={"/"} text={"Homepage"} />
          <NavigationButton route={"/about"} text={"About Me"} />
          <NavigationButton route={"/projects"} text={"Projects"} />
          <NavigationButton route={"/contact"} text={"Contact"} />
          <DownloadButton text={"CV"} />
          <LanguageSwitch />
        </Stack>
      </Stack>
      <Box sx={{ padding: 3 }}>{children}</Box>
    </Stack>
  );
};

export const NavigationButton: FC<{
  route: string;
  text: string;
  fontSize?: string;
}> = ({ route, text, fontSize }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(route);
      }}
      sx={{
        color: "#1ae8e8",
        borderRadius: 2,
        fontSize: fontSize ?? "1.1rem",
        fontWeight: "400",
      }}
    >
      {text}
    </Button>
  );
};

const DownloadButton: FC<{
  text: string;
}> = ({ text }) => {
  return (
    <Button
      onClick={() => {
        console.log("download logic");
      }}
      sx={{
        color: "#1ae8e8",
        borderRadius: 2,
        fontSize: "1.1rem",
        fontWeight: "400",
      }}
    >
      {text}
    </Button>
  );
};

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState<boolean>(i18n.language === "de");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      i18n.changeLanguage("de");
    } else {
      i18n.changeLanguage("en");
    }
    setChecked(event.target.checked);
  };

  return (
    <Box display="flex" alignItems="center">
      <FormControlLabel
        control={<div />}
        label="EN"
        labelPlacement="start"
        style={{ marginRight: 0 }}
      />
      <Switch checked={checked} onChange={handleChange} />
      <FormControlLabel
        control={<div />}
        label="DE"
        labelPlacement="end"
        style={{ marginLeft: 0 }}
      />
    </Box>
  );
};
