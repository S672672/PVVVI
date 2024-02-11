import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./NavBar";
import Signup from "../Signup";
import HomePage from "./HomePage";

const Approuter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path='/signup' exact component={Signup} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default Approuter;