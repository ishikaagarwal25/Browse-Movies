import React, { useEffect, useState } from "react";
import "./movieDetail.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovie, setCurrentMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a261f72a4659a088783050bd3356a96&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setCurrentMovie(data));
  });

  return (
    <div className="detail-container">
      <div className="detail">
        <div className="detailImg-container">
          <img
            className="detail-poster"
            src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
            alt={currentMovie.original_title}
          />
        </div>
        <div className="movie-detail">
          <div className="detail-title">
            <h1>{currentMovie.original_title}</h1>
            <h3>{currentMovie.tagline}</h3>
          </div>
          <div className="detail-title2">
            <div className="detail-rating">
              <div className="rating-num">
                {Math.round(currentMovie.vote_average * 10) / 10}
              </div>
              <i className="fas fa-star" />
            </div>
            <div className="votes">{`(${currentMovie.vote_count}) votes`}</div>
          </div>
          <div className="detail-date">
            <span>Release Year: </span>
            {currentMovie && currentMovie.release_date
              ? currentMovie.release_date.slice(0, 4)
              : ""}
          </div>
          <div className="detail-duration">
            <span>Duration: </span>
            {`${currentMovie.runtime} minutes`}
          </div>
          <div className="genres">
            {currentMovie && currentMovie.genres
              ? currentMovie.genres.map((genre) => {
                  return <span className="genre">{genre.name}</span>;
                })
              : ""}
          </div>
          <div className="synopsis">
            <span>Synposis: </span>
            {currentMovie.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
