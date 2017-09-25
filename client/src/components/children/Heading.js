import React from "react";
import {Link} from "react-router-dom";

const Heading = () => <div id="heading">
  <div className="intro-text">
    <h1>Reacting to the NY Times</h1>
    <p>Search through the archives of the NY Times and save your favorite articles!</p>
    <div className="btnRow">
      <Link to="/search">
        <button className="btn btn-secondary">
          <i className="fa fa-search"></i>
          Search Articles</button>
      </Link>
      <Link to="/saved">
        <button className="btn btn-secondary">
          <i className="fa fa-floppy-o"></i>
          Saved Articles</button>
      </Link>
    </div>
  </div>
</div>

export default Heading;