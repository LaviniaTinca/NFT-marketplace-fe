import { Typography } from "@mui/material";
import rocket from "../../assets/RocketLaunch.png";
import { avatarData } from "../../utils/data/dummyData";
import ArtistCard from "../artistCard/ArtistCard";
import "../header/header.scss";
import "./topCreators.scss";

const TopCreators = () => {
  return (
    <>
      <section className="creators">
        <div className="container">
          <div className="headline">
            <div className="text">
              <Typography variant="h3">Top Creators</Typography>
              <Typography variant="body">
                Checkout Top Rated Creators on the NFT Marketplace{" "}
              </Typography>
            </div>
            <button className="secondary-outlined-btn view-rankings">
              <div className="flex gap">
                <img className="rocket" src={rocket} alt="user icon" />
                <Typography variant="base">View Rankings</Typography>
              </div>
            </button>
          </div>

          <div className="avatar-grid">
            {avatarData.map((avatar, index) => (
              <ArtistCard key={index} avatar={avatar} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCreators;
