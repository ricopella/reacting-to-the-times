import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
import helpers from "../utils/helpers";

import Search from "../components/children/Search";
import Saved from "../components/children/Saved";
class Main extends React.Component {
  
  render() {
    
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="# ">Reacting to the NY Times</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" id="nav-heading" href="#heading">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="nav-articles" href="#results">Articles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="nav-scrape" href="#results">New Articles</a>
                </li>
              </ul>
            </div>
          </nav>

          <div id="heading">
            <div className="intro-text">
            <h1>Welcome to Reacting to the NY Times!</h1>
            <p>A fresh brew of news from NYTimes.com</p>
            </div>
          </div>
          <Search />
          <Saved />

        <div className="row-fluid footer">
          <div className="col-12 text-center">
            <p> 2017 &copy; Narin R. Sundarabhaya</p>
          </div>
        </div>
      </div>
        );
    }
  }

export default Main;
