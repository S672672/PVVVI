import { createBrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Signup from "../Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ]);

export default router;