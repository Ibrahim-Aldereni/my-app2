import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Fav from "./components/Fav";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Header />
          <Switch>
            <div className="app-body">
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/fav">
                <Fav />
              </Route>
            </div>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
