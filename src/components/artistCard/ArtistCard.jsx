/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import "./artistCard.scss";
const ArtistCard = ({ avatar }) => {
  return (
    <>
      <div className="artist-card">
        <div className="avatar">
          <div className="box">
            <img src={avatar.image} alt="avatar" />
          </div>
        </div>
        <div className="info">
          <Typography variant="h5">{avatar.name}</Typography>
          <div className="aditional">
            <Typography variant="base">Total sales:</Typography>
            <Typography variant="base">{avatar.info}</Typography>
          </div>
        </div>
        <div className="ranking">
          <div className="box">{avatar.ranking}</div>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
