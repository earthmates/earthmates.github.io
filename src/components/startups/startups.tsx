import classNames from "classnames";
import styles from "./startups.module.scss";
import { Button } from "../button/button";
import CommonLanding from "../commonLanding/CommonLanding";

export interface StartupsProps {
  className?: string;
}

export const Startups = ({ className }: StartupsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      {/*first div */}
      <div className="startup-landing-container">
        <div className="text-container">
          <div className="transparent-button">Connect with Investors</div>
          <div id="landing-title">
            GET ACCESS TO WORLDWIDE FUNDING WITH EARTHMATES
          </div>
          <div id="landing-paragraph">
            Your sustainable matching platform connects African tech-Startups
            with global investors to create an impact for the world and unlock
            profits
          </div>
          <div className="button-container">
            <Button buttonText="Start Matching" />
          </div>
        </div>
        <div className="image-container">
          <div id="mainImage"></div>
        </div>
      </div>
      {/*second div */}
      <div className="startup-second-container">
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
          <div id="card3" className="cards">
            <div id="cardIcon3" className="card-icon"></div>
            <h1 className="cardTitle"></h1>
            <p className="cardParagraph"></p>
          </div>
        </div>
        {/*third div */}
        <div className="startup-third-container">
          <div className="title-container">
            <h1 className="title"></h1>
            <p className="paragraph"></p>
          </div>
          <div className="button-row">
            <div id="button0"></div>
            <div id="button1"></div>
            <div id="button2"></div>
            <div id="button3"></div>
          </div>
          <div className="main-third">
            <div className="text-container">
              <h1 className="title"></h1>
              <p className="paragraph"></p>
            </div>
            <div className="image-container">
              <div id="mainImage"></div>
            </div>
          </div>
        </div>
        {/*fourth div */}
        <div className="startup-fourth-container">
          <div className="title-container">
            <img src="" alt="" className="icon" />
            <h1 className="title"></h1>
            <p className="paragraph"></p>
          </div>
          <div className="main-container-fourth">
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
          <Button buttonText="Create a profile" />
        </div>
      </div>
      {/*here comes the component that is common
      in both pages {investor,startup} */}
      <CommonLanding role="investor" />
    </div>
  );
};
