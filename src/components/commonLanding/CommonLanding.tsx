import React from "react";
import "./commonlanding.scss";
import { Button } from "../button/button";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export interface InvestorsProps {
  role: string;
}
function CommonLanding({ role }: InvestorsProps) {
  var color;
  var secondaryColor;
  if (role === "startup") {
    //here goes the code for startups colors
    color = "#FF8516";
    secondaryColor = "#FFEEDF";
  } else {
    //here goes the code for investors colors
    color = "#2F2B6F";
    secondaryColor = "#E0DFEA";
  }

  //here goes the page code
  //divided into statup and investor
  if (role === "startup") {
    return (
      <div className="external-container">
        {/*first container */}
        <div className="first-container">
          <div className="title-container">
            <h1 className="title"></h1>
            <p className="paragraph"></p>
          </div>
          <div className="content">
            <div id="mainImage"></div>
            <div className="text-container">
              <h1 className="title"></h1>
              <p className="paragraph"></p>
            </div>
          </div>
        </div>
        {/*second container*/}
        <div className="second-container">
          <div className="title-container">
            <h1 className="title"></h1>
            <p className="paragraph"></p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="external-container"></div>;
  }
}

export default CommonLanding;
