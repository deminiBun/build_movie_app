import React from "react";
import SingleLikedMovie from "./SingleLikedMovie";
import "./MovieList.css";

const LikedList = (props) => {
  const data = props.likedDetail;
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
        handleUnlikedList={props.handleUnlikedList}
        handleBlockedList={props.handleBlockedList}
      />
    );
  });

  let newMovieArr = [...new Set(movieArr)];

  return (
    <main>
      <div className='gallery-container'>{newMovieArr}</div>
    </main>
  );
};

export default LikedList;
