import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Heading = () => {
  const { t } = useTranslation();

  return (
    <Stack sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Typography variant="h1">MAZEN</Typography>
      <Typography variant="h1">EL-SHAARAWI</Typography>
      <Typography variant="h3">
        {t('homepage.subtitle')}
      </Typography>
    </Stack>
  );
};
