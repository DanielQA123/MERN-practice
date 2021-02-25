'use strict';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/09-Routing/Home";
import About from "./Components/09-Routing/About";
import Product from "./Components/09-Routing/Product";
import Nav from "./Components/09-Routing/Nav";
import NavOverview from "./Components/NavOverview";


import Introduction from "./Components/01-Intro/First";
import Second from "./Components/01-Intro/Second";
import Biopic from "./Components/01-Intro/Biopic";
import Standard from "./Components/02-Parents-Child/Standard";
import PropsComp from "./Components/03-Props/Props_Tutorial/PropsComp"
;
import Individual from "./Components/03-Props/Pair-Task/Individual";

import People from "./Components/03-Props/Pair-Task/People";
import EmployeeTutorial from "./Components/10-Data-Requests/EmployeeTutorial";

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavOverview/>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path ="/Product">
            <Product/>
          </Route>
          <Route path="/EmployeeTutorial">
          <EmployeeTutorial/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



