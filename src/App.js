import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/children/Nav";
import Heading from "./components/children/Heading";
import Footer from "./components/children/Footer";
import Search from "./components/children/Search";
import Saved from "./components/children/Saved";

const App = () =>
  <Router >
    <div>
      <Nav />
        <Route exact path="/" component={Heading} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      <Footer />
    </div>
  </Router>;

export default App;

