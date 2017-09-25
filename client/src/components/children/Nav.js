import React from "react";
import {Link} from "react-router-dom";

const Nav = props => <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="# ">Reacting to the NY Times</a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/search">Search</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/saved">Saved Articles</Link>
      </li>
    </ul>
  </div>
</nav>;

export default Nav;