import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
import helpers from "../utils/helpers";

import Search from "../components/children/Search";
import Saved from "../components/children/Saved";
import Nav from "../components/children/Nav";
import Heading from "../components/children/Heading";
import Footer from "../components/children/Footer";

class Main extends React.Component {
  
  render() {
    
        return (
          <div>
          <Nav />
          <Heading />
          <Search />
          <Saved />
          <Footer />
        
      </div>
        );
    }
  }

export default Main;
