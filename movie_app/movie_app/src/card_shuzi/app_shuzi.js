import React, { useState, useEffect } from "react";
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import MovieList from "./MovieList";

import "bootstrap/dist/css/bootstrap.min.css";

import MovieListHeading from "./MovieListHeading";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFavourite from "./AddToFavourites";
import axios from "axios";
import Movie from "./Movie";

const App = () => {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + "search/movie";
  const DISCOVER_API = MOVIE_API + "discover/movie";
  const API_KEY = "e12dc87b950da3d9999209944761851d";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(
      `${searchKey ? SEARCH_API : DISCOVER_API}`,
      {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      }
    );

    console.log(data.results[0]);
    setMovies(data.results);
    setMovie(data.results[0]);
    if (data.results.length) {
      await fetchMovie(data.results[0].id);
    }
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    setMovie(data);
  };

  const selectMovie = (movie) => {
    fetchMovie(movie.id);
    setPlaying(false);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <Movie
        selectMovie={selectMovie}
        key={movie.id}
        movie={movie}
        title={movie.title}
      />
    ));
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <div className="App">
      <header className="center-max-size header">
        <span className={"brand"}>Our Top Rated Movie List </span>
        <form className="form" onSubmit={fetchMovies}>
          <input
            className="search"
            type="text"
            id="search"
            onInput={(event) => setSearchKey(event.target.value)}
          />
          <button className="submit-search" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </header>
      {movies.length ? (
        <main>
          {movie ? (
            <div
              className="poster"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`,
              }}
            >
              {playing ? (
                <>
                  <button
                    onClick={() => setPlaying(false)}
                    className={"button close-video"}
                  >
                    Close
                  </button>
                </>
              ) : (
                <div className="center-max-size">
                  <div className="poster-content">
                    {trailer ? (
                      <button
                        className={"button play-video"}
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Like
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <button
                      className={"button play-video"}
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Block
                    </button>
                  </div>
                  <h1>{movie.title}</h1>
                  <h1>Release date:{movie.release_date}</h1>
                  <p>{movie.overview}</p>
                </div>
              )}
            </div>
          ) : null}

          <div className={"center-max-size container"}>{renderMovies()}</div>
        </main>
      ) : (
        "Sorry, no movies found"
      )}
    </div>
  );
};

export default App;
