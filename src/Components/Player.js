import React from "react";
import "../Css/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body.js";
import Footer from "./Footer.js";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
