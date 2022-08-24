import React, { useState } from "react";
import "../Css/Sidebar.css";
import Sidebaroption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
      />

      <Sidebaroption title="Home" Icon={HomeIcon} />
      <Sidebaroption title="Search" Icon={SearchIcon} />
      <Sidebaroption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <Sidebaroption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
