import React, { useEffect, useState } from "react";
import "./movieList.css";
import Card from "../card/card.js";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=8a261f72a4659a088783050bd3356a96&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=8a261f72a4659a088783050bd3356a96&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [type]);

  return (
    <div className="movies-list">
      <div className="list-cards">
        {movies.map((movie, index) => {
          return <Card key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
