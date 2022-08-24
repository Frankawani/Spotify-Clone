import React from "react";
import "../Css/Header.css";
import Search from "@mui/icons-material/Search";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useDataLayerValue } from "./DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs" type="text" />
      </div>
      <div className="header__right">
        <PersonOutlineIcon
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
