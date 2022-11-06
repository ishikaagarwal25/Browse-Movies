import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        {/* <div className="header-left"> */}
        {/* </div> */}
        <div className="header-right">
          <Link to="/">
            {/* <img
              className="header-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="IMDb Logo"
            /> */}
            <span>Home</span>
          </Link>
          <Link to="/movies/popular">
            <span>Popular</span>
          </Link>
          {/* <Link to="/movies/top-rated">
          <span className="top-rated">Top Rated</span>
        </Link> */}
          <Link to="/movies/upcoming">
            <span>Upcoming</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
