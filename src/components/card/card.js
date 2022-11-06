import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={350} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="card-container">
            <div className="cards">
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.poster_path
                }`}
              />

              <div className="cards-overlay">
                <div className="card-title">{movie.original_title}</div>
                <div className="card-date">{movie.release_date}</div>
                <div className="card-rating">
                  <div className="rating">{movie.vote_average}</div>
                  <i className="fas fa-star" />
                </div>
                <div className="card-desc">
                  {movie ? movie.overview.slice(0, 100) + "..." : ""}
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
