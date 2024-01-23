// import { Link } from "react-router-dom";
import logo from "../../assets/Storefront.png";
import logotext from "../../assets/NFTMarketplace.png";
import user from "../../assets/User.png";
import navMenu from "../../assets/navMenu.png";

import NavItem from "./NavItem";
import { Typography } from "@mui/material";
import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      label: "Marketplace",
      path: "/",
    },
    {
      label: "Rankings",
      path: "/",
    },
    {
      label: "Connect a wallet",
      path: "/",
    },
  ];

  return (
    <>
      <header>
        {/* <Link to="/"> */}
        <div className="logo">
          <img src={logo} alt="logo image" />
          <img src={logotext} alt="text image" className="text" />
        </div>
        {/* </Link> */}
        <nav>
          <div className="links">
            <NavItem label="Marketplace" path="/" />
            <NavItem label="Rankings" path="/" />
            <NavItem label="Connect a wallet" path="/" />
            <button to="/login" className="secondary-filled-btn">
              <div className="flex">
                <img className="user" src={user} alt="user icon" />
                <Typography variant="base">Sign Up</Typography>
              </div>
            </button>
          </div>
          <img
            className="menuButton"
            src={navMenu}
            alt="menu button"
            width={24}
            height={24}
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="mobileLinks">
              {links.map((link) => (
                <NavItem label={link.label} path={link.path} key={link.label} />
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
