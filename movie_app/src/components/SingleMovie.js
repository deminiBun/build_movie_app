import React from "react"
import "./SingleMovie.css"

const SingleMovie = (props) => {
  const data = props.data
  const getMovieID = props.getMovieID
  //   console.log(data);
  const handleMovieDetail = () => {
    // console.log(data.id);
    getMovieID(data.id)
    props.onShow(true)
  }

  const handleLike = () => {
    props.handleLikedList(data.id)
    // console.log(e);
    // console.log(data.id);
  }

  const handleBlock = () => {
    props.handleBlockedList(data.id)
  }

  return (
    <div className='movie-container' id={data.id}>
      <div className='like-it' onClick={handleLike}>
        <div className='like-it-inner'>&#x2764;</div>
      </div>
      <div className='movie-img'>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.image}`}
          alt='single movie poster'
          onClick={handleMovieDetail}
        />
      </div>
      <div className='movie-title'>
        <h3>{data.title}</h3>
      </div>
      <div className='movie-userAction'>
        <button className='movie-block' onClick={handleBlock}>
          Block
        </button>
      </div>
      <div className='movie-date'>
        <p>{data.date}</p>
      </div>
    </div>
  )
}

export default SingleMovie
