import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Poem1 from "./pages/Poem1";
import PoemSBM from "./pages/PoemSBM";

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
    path: "/Stand-By-Me", // Poem 1 Route
    element: <PoemSBM />, // Public Route
  },
]);

export default router;
