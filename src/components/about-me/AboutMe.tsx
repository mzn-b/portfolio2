import { Stack } from "@mui/material";
import { CustomContainer, NavigationButton } from "../CustomContainer";
import { AboutMeSection } from "./AboutMeSection";
import { EducationSection } from "./EducationSection";
import { CareerSection } from "./CareerSection";

export const AboutMe = () => {
  return (
    <CustomContainer>
      <Stack spacing={2}>
        <AboutMeSection />
        <EducationSection />
        <CareerSection />
        <NavigationButton
          route={"/projects"}
          text={"View my work"}
          fontSize="1.5rem"
        />
      </Stack>
    </CustomContainer>
  );
};
