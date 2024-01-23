import { Typography } from "@mui/material";
import "./header.scss";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavItem = ({ label, path }) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active navlink" : "navlink")}
      >
        <Typography variant="base">{label}</Typography>
      </NavLink>
    </>
  );
};

export default NavItem;
