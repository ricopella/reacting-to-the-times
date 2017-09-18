import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
// import helpers from "../utils/helpers";
class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    
        return (
          <div className="container">
            <div className="jumbotron">
              <h2><strong>Article Finder</strong></h2>
              <p><em>A journey through the whimsical world of React Routing</em></p>
              <hr />
              <p>
              </p>
            </div>
          </div>
        );
    }
  }

export default Main;
