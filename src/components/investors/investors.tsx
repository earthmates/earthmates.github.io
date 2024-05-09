import classNames from "classnames";
import styles from "./investors.module.scss";
import { Button } from "../button/button";
import InvestorImage from "../../assets/investor_page/investor-image.png";
import BriefcaseIcon from "../../assets/investor_page/analytics-up.svg";
import UsergroupIcon from "../../assets/investor_page/computer-dollar.svg";
import FilevalidationIcon from "../../assets/investor_page/user-group.png";

import IconSvg from "../../assets/investor_page/icon.svg";
import ReviewSvg from "../../assets/startup_page/review.svg";

export interface InvestorsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Investors = ({ className }: InvestorsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.hero}>
        <div>
          <button>Connect with Startups</button>
          <h1>INVEST IN AFRICA'S FUTURE WITH CONFIDENCE</h1>
          <p>
            Discover Lucrative Investment Opportunities and Drive Positive
            Change with Earthmates
          </p>
          <Button buttonText="Start Investing" color="#2F2B6F" />
        </div>
        <img src={InvestorImage} alt="" />
      </div>
      <div className={styles.home}>
        <div className={styles.features}>
          <h1 className={styles.h1}>Start Your Investment Journey Today</h1>
          <p className={styles.p}>
            Join our platform today and be part of Africa's thriving startup
            ecosystem.
          </p>
          <div className={styles["features-cards"]}>
            <div className={styles.card}>
              <h2 className={styles.h1}>Sign Up and Create Your Profile </h2>
              <p>
                Create your investor profile by providing details about your
                investment preferences, risk tolerance, and sector interests.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>Explore Investment Opportunities</h2>
              <p>
                Dive into our curated selection of investment opportunities
                spanning various sectors and stages of growth.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.h1}>
                Engage and Make Informed Investments
              </h2>
              <p>
                Engage in discussions, attend events, and collaborate with other
                investors to gain insights and share knowledge on investing.
              </p>
            </div>
          </div>
          <div className={styles.button}>
            <Button
              buttonText="Register Now"
              color="#ffff"
              textColor="#0b0b09"
            />
          </div>
        </div>
      </div>
      <div className={styles.difference}>
        <div className={styles.header}>
          <img src={IconSvg} alt="" />
          <div>
            <h1 className={styles.h1}>
              Get Access to Exclusive Investment Opportunities
            </h1>
            <p className={styles.p}>
              Discover a world of investment potential with Earthmates. Join to
              gain access to high-potential startups.
            </p>
          </div>
        </div>
        <div className={styles["difference-cards"]}>
          <div className={styles.card}>
            <img src={BriefcaseIcon} alt="profile" />
            <h2 className={styles.h1}>Access Top Investment Opportunities </h2>
            <p className={styles.p}>
              By joining as an investor, you gain access to a curated selection
              of high-potential investment opportunities in African startups.
            </p>
          </div>
          <div className={styles.card}>
            <img src={UsergroupIcon} alt="profile" />
            <h2 className={styles.h1}>Seamless Investing Experience</h2>
            <p className={styles.p}>
              Whether you're a seasoned investor or new to investing, Earthmates
              makes it easy to navigate the world of venture capital and
              maximize your investment potential.
            </p>
          </div>
          <div className={styles.card}>
            <img src={FilevalidationIcon} alt="profile" />
            <h2 className={styles.h1}>Expand Your Network</h2>
            <p className={styles.p}>
              Joining Earthmates allows you to expand your network within the
              global investment community and connect with like-minded
              individuals.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.header}>
          <h1 className={styles.h1}>
            Hear What Our Tech Founders Have to Say!
          </h1>
          <p className={styles.p}>
            Discover firsthand experiences from tech founders who have
            transformed their startup journeys with Earthmates.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={ReviewSvg} alt="" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.h1}>
              “Thanks to Earthmates, I secured funding and strategic
              partnerships that propelled my startup&apos;s growth. Highly
              recommended for any tech founder looking to accelerate their
              journey.”
            </h1>
            <p className={styles.p}>
              John Smith, Founder &amp; CEO, Tech Innovations Inc.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <div className={styles.header}>
          <h1>FAQs</h1>
          <p>
            Explore answers to commonly asked questions about investing with
            Earthmates.
          </p>
        </div>
        <div className={styles.questions}>
          <h1>Question 1</h1>
          <h1>Question 2</h1>
          <h1>Question 3</h1>
          <h1>Question 4</h1>
        </div>
      </div>
      <div className={styles.next_steps}>
        <h1>Ready to Take the Next Step?</h1>
        <p>Join Earthmates Today and Propel Your Startup Forward!</p>
        <Button buttonText="Register Now" color="#ffff" textColor="#001B2E" />
      </div>
    </div>
  );
};
