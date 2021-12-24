import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/menuPage";

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
