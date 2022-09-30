import "./SingleBlockedMovie.css";

const SingleBlockedMovie = (props) => {
  const data = props.data;
  const getMovieID = props.getMovieID;
  //   console.log(data);
  const handleMovieDetail = () => {
    // console.log(data.id);
    getMovieID(data.id);
    props.onShow(true);
  };

  const handleUnblock = () => {
    props.removeFromBlockedList(data.id);
  };

  return (
    <div className='movie-container' id={data.id}>
      {/* <div className='like-it' onClick={handleLike}>
        <div className='like-it-inner'>&#x2764;</div>
      </div> */}
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
        <button className='movie-block' onClick={handleUnblock}>
          Unblock
        </button>
      </div>
    </div>
  );
};

export default SingleBlockedMovie;
