import React from "react";
import SingleMovie from "./SingleMovie";
import "./MovieList.css";

const MovieList = (props) => {
  const getMovieID = props.getMovieID;
  const data = props.movieData;

  const getMovieIDHandler = (props) => {
    getMovieID(props);
  };

  const movieArr = [];
  data.forEach((element, index) => {
    let movie = data[index];
    movie = {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      date: movie.release_date,
      image: movie.poster_path,
      background: movie.backdrop_path,
      type: movie.genre_ids,
      totalPages: data.total_pages,
    };
    movieArr.push(
      <SingleMovie
        data={movie}
        key={movie.id}
        getMovieID={getMovieIDHandler}
        onShow={props.onShow}
        handleLikedList={props.handleLikedList}
        handleBlockedList={props.handleBlockedList}
      />
    );
  });

  return (
    <main>
      <div className='gallery-container'>{movieArr}</div>
    </main>
  );
};

export default MovieList;
