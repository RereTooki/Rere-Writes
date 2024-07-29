import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ImageSlides from "./components/ImageSlides";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />, // Public Route
  },
]);

export default router;
