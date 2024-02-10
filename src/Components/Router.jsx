import { createBrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Signup from "../Signup";
import HomePage from "./HomePage";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children:[
        {
          path:'',
          element:<HomePage />
        },
        {
          path:"Signup",
          element:<Signup />
        }
      ]
    },
  ]);

export default Router;