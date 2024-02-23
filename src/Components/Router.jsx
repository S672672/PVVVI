import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../Signup";
import Giveaway from "../Giveaway";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:'/giveaway',
        element:<Giveaway />
      },
    ]
  },
]);

export default router;
