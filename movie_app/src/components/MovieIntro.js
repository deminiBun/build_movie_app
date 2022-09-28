import React from "react";
import "./MovieIntro.css";

const MovieIntro = (props) => {
  const showIntro = props.showIntro;
  let data = props.data;
  //   const genresList = props.genresList;
  data = {
    title: data.title,
    production: data.production_companies,
    genres: data.genres,
    date: data.release_date,
    overview: data.overview,
    image: data.poster_path,
  };

  // Change genre of a movie into an array
  let genre = data.genres;
  let genreArr = [];
  if (genre) {
    for (let element of genre) {
      genreArr.push(element.name);
    }
  }
  const showGenre = [];
  if (genreArr.length !== 0) {
    genreArr.forEach((data) => {
      showGenre.push(
        <div className='genre' id={data} key={data}>
          {data}
        </div>
      );
    });
  }
  const showProduction = [];
  if (genreArr.length !== 0) {
    data.production.forEach((data) => {
      showProduction.push(<div key={data.name}>{data.name}</div>);
    });
  }

  //   genre.forEach((element) => {
  //     console.log(element);
  //   });

  // Fetch genre list
  //   let year = data.date.slice(0, 4);
  const closeIntro = () => {
    props.closeIntro();
  };

  const content = () => {
    return (
      <>
        <div className='modal-img'>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.image}`}
            alt='movie poster'
          />
        </div>
        <div className='modal-main'>
          <div className='modal-title'>{data.title}</div>
          <div className='modal-genre'>{showGenre}</div>
          <div className='modal-overview'>
            <p>{data.overview}</p>
          </div>
          <div className='modal-proinfo'>Productions</div>
          <div className='modal-production'>{showProduction}</div>
        </div>
      </>
    );
  };

  return (
    <>
      {showIntro ? <div className='modal'>{content()}</div> : null}
      {showIntro ? <div className='overlay ' onClick={closeIntro}></div> : null}
    </>
  );
};

export default MovieIntro;
