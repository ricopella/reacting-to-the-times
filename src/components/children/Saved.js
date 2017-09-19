import React, { Component } from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
import helpers from "../../utils/helpers";

class Saved extends Component {
    
      render() {
        
            return (
                <div className="container">
                <div className="row">
                  <div className="jumbotron">
                    <h2 className="text-center">Saved Articles</h2>
                  </div>
        
                  <div className="col-md-6">
        
        
                  </div>
        
                  <div className="col-md-6">
        
        
                  </div>
        
                </div>
        
              </div>



            )
        }
}
export default Saved;