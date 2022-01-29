import "./App.css";
import SignIn from "./components/SignIn";
import Jumia from "./components/Jumia";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JTOMlG2GQ4NQJm6ksoSLSB5eqGhygXvtviS8tcTqKO9E90K1uxpF8SOtcZ95OYuHG1cR2K81KINRiqCSs0qHVQP00icnWksA1"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/home" component={Jumia} />
          <Route path="/checkout" component={Checkout} />
          
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
