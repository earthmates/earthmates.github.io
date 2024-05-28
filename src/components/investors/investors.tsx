import classNames from "classnames";
import styles from "./investors.module.scss";
import { Button } from "../button/button";
import CommonLanding from "../commonLanding/CommonLanding";

export interface InvestorsProps {
  className?: string;
}

export const Investors = ({ className }: InvestorsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      {/*first div */}
      <div className="investor-landing-container">
        <div className="text-container">
          <div className="transparent-button">Connect with Investors</div>
          <div id="landing-title">INVEST IN AFRICA'S FUTER WITH CONFIDENCE</div>
          <div id="landing-paragraph">
            Discover Lucrative Investment Opportunities and Drive Positive
            Change with Earthmates
          </div>
          <div className="button-container">
            <Button buttonText="Start Matching" color="#2F2B6F" />
          </div>
        </div>
        <div className="image-container">
          <div id="mainImage"></div>
        </div>
      </div>
      {/*second div */}
      <div className="investor-second-container">
        <div className="title-container">
          <h1 className="title"></h1>
          <p className="paragraph"></p>
        </div>
        <div className="cards-container">
          <div id="card0" className="cards">
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
          <div id="card1" className="cards">
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
          <div id="card2" className="cards">
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
        </div>
        <Button buttonText="Register Now" color="#ffffff" textColor="#2F2B6F" />
      </div>
      {/*third div */}
      <div className="investor-third-container">
        <div className="title-container">
          <img src="" alt="" className="icon" />
          <h1 className="title"></h1>
          <p className="paragraph"></p>
        </div>
        <div className="main-container-third">
          <div id="card0" className="cards">
            <div id="cardIcon0" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
          <div id="card1" className="cards">
            <div id="cardIcon1" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
          <div id="card2" className="cards">
            <div id="cardIcon2" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
        </div>
      </div>
      {/*fourth container */}
      <div className="investor-fourth-container">
        <div className="title-container">
          <h1 className="title"></h1>
          <p className="paragraph"></p>
        </div>
        <div className="cards-container">
          <div id="card0" className="cards">
            <div id="cardIcon0" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
          <div id="card1" className="cards">
            <div id="cardIcon1" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
          <div id="card2" className="cards">
            <div id="cardIcon2" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
        </div>
      </div>

      {/*here comes the component that is common
      in both pages {investor,startup} */}
      <CommonLanding role="investor" />
    </div>
  );
};
