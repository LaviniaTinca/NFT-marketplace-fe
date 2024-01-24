import { Typography } from "@mui/material";
import logo from "../../assets/Storefront.png";
import footerNFT from "../../assets/footerNFT.svg";
import DiscordLogo from "../../assets/DiscordLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";
import TwitterLogo from "../../assets/TwitterLogo.png";
import YoutubeLogo from "../../assets/YoutubeLogo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="nft-info">
          {/* <Link to="/"> */}
          <div className="logo">
            <img src={logo} alt="logo image" />
            <img src={footerNFT} alt="text image" />
          </div>
          {/* </Link> */}
          <div className="footer-box">
            <div className="color">
              <Typography variant="base" style={{ color: "$caption" }}>
                NFT marketplace UI created with Anima for Figma.
              </Typography>
            </div>
            <div className="footer-aditional-info">
              <Typography variant="base">Join our community</Typography>
              <div className="footer-icons">
                <img src={DiscordLogo} alt="Social logo" />
                <img src={YoutubeLogo} alt="Social logo" />
                <img src={TwitterLogo} alt="Social logo" />
                <img src={InstagramLogo} alt="Social logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="nft-info">
          <div className="color2">
            <Typography variant="h5" style={{ color: "$caption" }}>
              Explore
            </Typography>
          </div>
          <div className="footer-box">
            <div className="color">
              <Typography variant="base">Marketing</Typography>
            </div>
            <div className="color">
              <Typography variant="base">Rankings</Typography>
            </div>
            <div className="color">
              <Typography variant="base">Connect a Wallet</Typography>
            </div>
          </div>
        </div>
        <div className="nft-info">
          <div className="color2">
            <Typography variant="h5">Join Our Weekly Digest</Typography>
          </div>
          <div className="footer-box">
            <div className="color">
              <Typography variant="base">
                Get exclusive promotions & updates straight to your inbox.
              </Typography>
            </div>
            <div className="subscribe">
              <Typography variant="base">Enter your email here</Typography>
              <button className="tertiary-filled-btn">Subscribe</button>
            </div>
            <div className="subscribe-mobile">
              <div className="block-mobile">
                <Typography variant="base" className="sub-mobile">
                  Enter your email here
                </Typography>
                <button className="tertiary-filled-btn sub-mobile-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-frame">
        <hr />
        <div className="color">
          <Typography variant="caption">
            Ⓒ NFT Market. Use this template freely.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
