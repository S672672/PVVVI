import { createBrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Signup from "../Signup";
import HomePage from "./HomePage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
]);

export default router;
