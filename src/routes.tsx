import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />, // Public Route
  },
]);

export default router;
