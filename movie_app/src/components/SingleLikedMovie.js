import React from "react";
import "./SingleLikedMovie.css";

const SingleLikedMovie = (props) => {
  const data = props.data;

  const handleUnlike = () => {
    props.handleUnlikedList(data.id);
  };

  const handleBlock = () => {
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
        <button className='movie-unlike' onClick={handleUnlike}>
          Unlike
        </button>
        <button className='movie-block' onClick={handleBlock}>
          Block
        </button>
      </div>
    </div>
  );
};

export default SingleLikedMovie;
