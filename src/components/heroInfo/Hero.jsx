import { Typography } from "@mui/material";
import rocket from "../../assets/RocketLaunch.png";
import SpaceTrip from "../../assets/SpaceTrip.png";
import avatar from "../../assets/Avatar.png";
import { heroAditionalInfo } from "../../utils/data/dummyData";

import "./hero.scss";
import "../header/header.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="left">
            <div className="headline">
              <Typography variant="h1">
                Discover Digital Art & Collect NFTs
              </Typography>
              <Typography variant="body">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </Typography>
            </div>
            <button className="secondary-filled-btn start-btn">
              <div className="flex gap">
                <img className="rocket" src={rocket} alt="user icon" />
                <Typography variant="base">Get Started</Typography>
              </div>
            </button>
            <div className="aditional-info">
              {heroAditionalInfo.map((data) => (
                <div key={data.name} className="box">
                  <Typography variant="h4">{data.count}</Typography>
                  <Typography variant="body">{data.name}</Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <img src={SpaceTrip} alt="space trip" />
              <div className="frame">
                <Typography variant="h5" className="text">
                  Space Walking
                </Typography>
                <div className="fartist-card">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" className="avatar-box" />
                  </div>
                  <Typography variant="base">AnimaKid</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
