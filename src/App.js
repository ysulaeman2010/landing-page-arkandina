import React from "react";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import "leaflet/dist/leaflet.css";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
