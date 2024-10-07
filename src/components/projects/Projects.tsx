import { Stack } from "@mui/material";
import { CustomContainer } from "../CustomContainer";
import { Portfolio1Section } from "./Portfolio1Section";
import { ProjectsSection } from "./ProjectsSection";

export const Projects = () => {
  return (
    <CustomContainer>
      <Stack spacing={2}>
        <ProjectsSection />
        <Portfolio1Section />
      </Stack>
    </CustomContainer>
  );
};
