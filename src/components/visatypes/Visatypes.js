import React from "react";
import "./Visatypes.css";
import { ReactComponent as Touristsvg } from "../../images/visatypes/tourist.svg";
import { ReactComponent as Studysvg } from "../../images/visatypes/study.svg";
import { ReactComponent as Spousalsvg } from "../../images/visatypes/spousal.svg";

export default function Visatypes() {
  return (
    <div className="cardcontainer">
      <div className="insidecont contentcont">
        <div className="vtypesheadingcont">HOW WE HELP CLIENTS!</div>
        <div className="vtypescont">
          <div className="vtypesself">
            <div className="svgcont">
              <Studysvg />
            </div>
            <h1 className="heading">Study Visa</h1>
            <p className="detailscont">
              Securing a student visa transforms dreams into reality, unlocking
              global education opportunities.
            </p>
          </div>
          <div className="vtypesself">
            <div className="svgcont touristsvg">
              <Touristsvg />
            </div>
            <h1 className="heading">Work Permit</h1>
            <p className="detailscont">
              Unlock new career horizons with a work permit visa, bridging
              borders for global opportunities and growth.
            </p>
          </div>
          <div className="vtypesself">
            <div className="svgcont">
              <Spousalsvg />
            </div>
            <h1 className="heading">Spousal Visa</h1>
            <p className="detailscont">
              A spouse visa allows married partners of citizens to live and work
              together in another country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
