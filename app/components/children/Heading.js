import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
import helpers from "../../utils/helpers";

class Heading extends React.Component {

  render() {
    
        return (

          <div id="heading">
          <div className="intro-text">
          <h1>Welcome to Reacting to the NY Times!</h1>
          <p>A fresh brew of news from NYTimes.com</p>
          </div>
        </div>
        );
    }
}

export default Heading;