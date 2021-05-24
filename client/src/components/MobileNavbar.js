import React from "react";
import Wrapper from "../styles/MobileNavbar";
import {
  HistoryIcon,
  HomeIcon,
  SubIcon,
  TrendingIcon,
  WatchIcon,
} from "./Icons";
import { NavLink } from "react-router-dom";

function MobileNavbar() {
  return (
    <Wrapper>
      <div className="icons">
        <NavLink to="/" exact activeClassName="active">
          <HomeIcon />
        </NavLink>

        <NavLink to="/feed/trending" activeClassName="active">
          <TrendingIcon />
        </NavLink>

        <NavLink to="/feed/subscriptions" activeClassName="active">
          <SubIcon />
        </NavLink>

        <NavLink to="/feed/history" activeClassName="active">
          <HistoryIcon />
        </NavLink>

        <NavLink to="/feed/liked_videos" activeClassName="active">
          <WatchIcon />
        </NavLink>
      </div>
    </Wrapper>
  );
}

export default MobileNavbar;
