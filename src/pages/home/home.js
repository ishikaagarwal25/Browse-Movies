import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=8a261f72a4659a088783050bd3356a96&language=en-US";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          className="carousel"
        >
          {popularMovies.map((movie, index) => {
            return (
              <div className="home-container" key={index}>
                <Link to={`/movie/${movie.id}`}>
                  <div className="overlay">
                    <div className="movie-info">
                      <div className="movie-title">
                        {movie ? movie.original_title : ""}
                      </div>
                      <div className="rating-container">
                        <div className="movie-rating">
                          {movie ? movie.vote_average : ""}
                        </div>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="movie-date">
                        {movie ? movie.release_date : ""}
                      </div>
                      <div className="movie-desc">
                        {movie ? movie.overview.slice(0, 200) + "..." : ""}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="img-container">
                  <picture>
                    <source
                      srcSet={`https://image.tmdb.org/t/p/original${
                        movie && movie.poster_path
                      }`}
                      media="(max-width:600px)"
                    ></source>
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.backdrop_path
                      }`}
                      alt={movie.original_title}
                    />
                  </picture>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
