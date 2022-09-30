import React from "react";
import SingleLikedMovie from "./SingleLikedMovie";
import "./MovieList.css";

const LikedList = (props) => {
  //   const movieDetail = props.detail;
  //   const likedList = props.likedList;
  const data = props.likedDetail;
  const getMovieID = props.getMovieID;

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
      <SingleLikedMovie
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

export default LikedList;
