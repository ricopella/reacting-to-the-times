import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
// // Helper Function
import helpers from "../../utils/helpers";

class Footer extends React.Component {

  render() {
    
        return (

        <div className="row-fluid footer">
            <div className="col-12 text-center">
                <p> 2017 &copy; Narin R. Sundarabhaya</p>
            </div>
        </div>
        );
    }
}

export default Footer;