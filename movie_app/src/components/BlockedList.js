import React from "react";
import SingleBlockedMovie from "./SingleBlockedMovie";
import "./BlockedList.css";

const BlockedList = (props) => {
  const data = props.blockedDetail;
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
      <SingleBlockedMovie
        data={movie}
        key={movie.id}
        getMovieID={getMovieIDHandler}
        onShow={props.onShow}
        // handleLikedList={props.handleLikedList}
        // handleBlockedList={props.handleBlockedList}
        removeFromBlockedList={props.removeFromBlockedList}
      />
    );
  });

  return (
    <main>
      {movieArr.length ? (
        <div className='gallery-container'>{movieArr}</div>
      ) : (
        <div className='no-movie'>No Blocked Movie</div>
      )}
    </main>
  );
};

export default BlockedList;
