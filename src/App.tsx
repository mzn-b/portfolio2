import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { WelcomePage } from "./pages/WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { AboutMe } from "./components/about-me/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
