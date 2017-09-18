var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
// import helpers from "../utils/helpers";

var Main = React.createClass({
    
      // Here we render the function
      render: function() {
    
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
    });

module.exports = Main;
