import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Poem1 from "./pages/Poem1";
import PoemSBM from "./pages/PoemSBM";
import PoemWeForgot from "./pages/PoemWeForgot";
import PoemTHUG from "./pages/PoemTHUG";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />, // Public Route
  },
  {
    path: "/poem-1", // Poem 1 Route
    element: <Poem1 />, // Public Route
  },
  {
    path: "/stand-by-me", // Poem 1 Route
    element: <PoemSBM />, // Public Route
  },
  {
    path: "/we-forgot", // Poem 1 Route
    element: <PoemWeForgot />, // Public Route
  },
  {
    path: "/the-hate-u-give", // Poem 1 Route
    element: <PoemTHUG />, // Public Route
  },
]);

export default router;
