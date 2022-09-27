import React, { useEffect } from "react";
import "./MovieIntro.css";

const MovieIntro = () => {
  let year = data.date.slice(0, 4);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Something Went Wrong!!!");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <div className='modal-img'>
        <img src={`https://image.tmdb.org/t/p/w500${data.image}`} />
      </div>
      <div className='modal-main'>
        <div className='modal-title'>
          {data.title} ({year})
        </div>
        <div className='modal-genre'>
          <div className='genre hidden' id='action'>
            Action
          </div>
          <div className='genre hidden' id='adventure'>
            Adventure
          </div>
          <div className='genre hidden' id='animation'>
            Animation
          </div>
          <div className='genre hidden' id='comedy'>
            Comedy
          </div>
          <div className='genre hidden' id='crime'>
            Crime
          </div>
          <div className='genre hidden' id='documentary'>
            Documentary
          </div>
          <div className='genre hidden' id='drama'>
            Drama
          </div>
          <div className='genre hidden' id='family'>
            Family
          </div>
          <div className='genre hidden' id='fantasy'>
            Fantasy
          </div>
          <div className='genre hidden' id='history'>
            History
          </div>
          <div className='genre hidden' id='horror'>
            Horror
          </div>
          <div className='genre hidden' id='music'>
            Music
          </div>
          <div className='genre hidden' id='mystery'>
            Mystery
          </div>
          <div className='genre hidden' id='romance'>
            Romance
          </div>
          <div className='genre hidden' id='fiction'>
            Science Fiction
          </div>
          <div className='genre hidden' id='tv'>
            TV Movie
          </div>
          <div className='genre hidden' id='thriller'>
            Thriller
          </div>
          <div className='genre hidden' id='war'>
            War
          </div>
          <div className='genre hidden' id='western'>
            Western
          </div>
        </div>
        <div className='modal-overview'>
          <p>{data.overview}</p>
        </div>
        <div className='modal-proinfo'>Productions</div>
        <div className='modal-production'></div>
      </div>
    </>
  );
};

export default MovieIntro;
