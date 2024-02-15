import { createBrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Signup from "../Signup";
import HomePage from "./HomePage";

export default Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: "signup",
        element: <Signup />
      }
    ]
  },
]);
