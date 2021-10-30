import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/menuPage";
import OrderPage from "./pages/orderPage/OrderPage";

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/order" exact>
               <OrderPage />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
