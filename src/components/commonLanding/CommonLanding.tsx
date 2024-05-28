import React from "react";
import "./commonlanding.modules.scss";
import { Button } from "../button/button";
export interface InvestorsProps {
  role: string;
}
function CommonLanding({ role }: InvestorsProps) {
  if (role === "startup") {
    //here goes the code for startups common landing
  } else {
    //here goes the code for investors common landing
  }

  return <div></div>;
}

export default CommonLanding;
