import React from "react";
import "./SingleBlockedMovie.css";

const SingleBlockedMovie = (props) => {
  const data = props.data;

  const handleLike = () => {
    props.handleLikedList(data.id);
  };

  const handleUnblock = () => {
    props.handleBlockedList(data.id);
  };

  return (
    <div className='movie-container' id={data.id}>
      <div className='movie-img'>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.image}`}
          alt='single movie poster'
        />
      </div>
      <div className='movie-title'>
        <h3>{data.title}</h3>
      </div>
      <div className='movie-userAction'>
        <button className='movie-like' onClick={handleLike}>
          Like
        </button>
        <button className='movie-unblock' onClick={handleUnblock}>
          Unblock
        </button>
      </div>
    </div>
  );
};

export default SingleBlockedMovie;
