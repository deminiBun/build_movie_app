import React from "react";
import { useState } from "react";
import AddFavourite from "./AddToFavourites";
import MovieList from "./MovieList";

const Movie = ({ movie, selectMovie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";
  const [readMore, setReadMore] = useState(false);

  return (
    <div onClick={() => selectMovie(movie)} className={"movie"}>
      <div className="movie-title">
        {movie.poster_path && (
          <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
        )}
        <div className={"flex between movie-infos"}>
          <h5 className={"movie-title"}>{movie.title}</h5>
          <p className={"movie-title"}>
            {readMore
              ? movie.overview
              : `${movie.overview.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          {movie.vote_average ? (
            <span className={"movie-voting"}>{movie.vote_average}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
