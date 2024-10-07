import { Button, Stack } from "@mui/material";

export const RoutingAccordeon = () => {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack direction={"row"}>
      <Button onClick={() => handleScrollToSection("about-me")}>
        About Me
      </Button>
      <Button onClick={() => handleScrollToSection("education")}>
        Education
      </Button>
      <Button onClick={() => handleScrollToSection("career")}>Career</Button>
      <Button onClick={() => handleScrollToSection("projects")}>
        Projects
      </Button>
      <Button onClick={() => handleScrollToSection("contact-me")}>
        Contact Me
      </Button>
    </Stack>
  );
};
