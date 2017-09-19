import React, { Component } from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
import helpers from "../../utils/helpers";

class Search extends Component {

  render() {
    
        return (
    
          <div className="container">
            <div className="row">
              <div className="jumbotron">
                <h2 className="text-center">Article Finder</h2>
                <p className="text-center">
                  <em>Enter a search to find similar articles.</em>
                </p>
              </div>
    
              <div className="col-md-6">
    
    
              </div>
    
              <div className="col-md-6">
    
    
              </div>
    
            </div>
    
          </div>
        );
      }
    }

export default Search;