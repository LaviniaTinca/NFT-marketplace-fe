import { Typography } from "@mui/material";
import { trendingData } from "../../utils/data/dummyData";
import "../header/header.scss";
import "./trending.scss";

const Trending = () => {
  return (
    <>
      <section className="trending">
        <div className="container">
          <div className="headline">
            <Typography variant="h3">Trending Collection</Typography>
            <Typography variant="body">
              Checkout our Weekly Updated Trending Collection
            </Typography>
          </div>
          <div className="card-collection">
            {trendingData.map((data) => (
              <>
                <div className="card">
                  <div className="photos">
                    <img
                      src={data.primaryPhoto}
                      alt="primary photo"
                      className="primary"
                    />
                    <div className="frame">
                      <img src={data.secondary1} alt="secondary one photo" />
                      <img src={data.secondary2} alt="secondary two photo" />
                      <div className="box">
                        <Typography variant="h5">{data.count}</Typography>
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <Typography variant="h5">{data.name1}</Typography>
                    <div className="fartist-card">
                      <div className="avatar">
                        <img
                          src={data.avatar}
                          alt="avatar"
                          className="avatar-box"
                        />
                      </div>
                      <Typography variant="base">{data.name2}</Typography>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
