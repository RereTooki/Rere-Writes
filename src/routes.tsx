import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

import TCOBCard from "./components/TCOBCard";
import PoemSBM from "./pages/PoemSBM";
import PoemLK from "./pages/PoemLK";
import PoemTHUG from "./pages/PoemTHUG";
import PoemWeForgot from "./pages/PoemWeForgot";
import PoemTM from "./pages/PoemTM";
import PoemNSNM from "./pages/PoemNSNM";
import PoemTS from "./pages/PoemTS";
import PoemSNE from "./pages/PoemSNE";
import PoemMR from "./pages/PoemMR";
import PoemBM from "./pages/PoemBM";
import PoemLIW from "./pages/PoemLIW";
import PoemJN from "./pages/PoemJN";

const router = createBrowserRouter([
  {
    path: "/", // Root Route
    element: <Homepage />, // Public Route
  },
  {
    path: "/the-chaos-of-beauty", // Poem 1 Route
    element: <TCOBCard />, // Public Route
  },
  {
    path: "/stand-by-me", // Stand By Me Route
    element: <PoemSBM />, // Public Route
  },
  {
    path: "/life-kitchen", // Life's Kitchen Route
    element: <PoemLK />, // Public Route
  },
  {
    path: "/the-hate-u-give", // the-hate-u-give Route
    element: <PoemTHUG />, // Public Route
  },
  {
    path: "/we-forgot", // we-forgot Route
    element: <PoemWeForgot />, // Public Route
  },
  {
    path: "/the-mandem", // the-mandem Route
    element: <PoemTM />, // Public Route
  },
  {
    path: "/new-semester-new-me", // new-semester-new-me Route
    element: <PoemNSNM />, // Public Route
  },
  {
    path: "//they-said", // /they-saidRoute
    element: <PoemTS />, // Public Route
  },
  {
    path: "/mizaru-kikazaru-iwazaru", // mizaru-kikazaru-iwazaru Route
    element: <PoemSNE />, // Public Route
  },
  {
    path: "/marriage", // marriage Route
    element: <PoemMR />, // Public Route
  },
  {
    path: "/better-me", // better-me Route
    element: <PoemBM />, // Public Route
  },
  {
    path: "/love-is-war", // love-is-war Route
    element: <PoemLIW />, // Public Route
  },
  {
    path: "/joyeux-noel", // joyeux-noel Route
    element: <PoemJN />, // Public Route
  },
]);

export default router;
