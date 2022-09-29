import React from "react"
import "./Filter.css"

const Filter = (props) => {
  const handleSetAPI = props.setAPI

  const handleSetPopularAPI = () => {
    handleSetAPI("https://api.themoviedb.org/3/movie/popular?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US&page=")
  }

  const handleSetRatingAPI = () => {
    handleSetAPI("https://api.themoviedb.org/3/movie/top_rated?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US&page=")
  }

  const handleSetUpcomingAPI = () => {
    handleSetAPI("https://api.themoviedb.org/3/movie/upcoming?api_key=ba0b9a7674177e1522e562b4d529814e&language=en-US&page=")
  }

  return (
    <nav>
      <div className='filter'>
        <div className='filter-container'>
          <button className="btn-popular"
            // className='page-btn btn-first'
            onClick={handleSetPopularAPI}
          >
            Popular
          </button>
          <button className="btn-rating" onClick={handleSetRatingAPI}>Rating</button>
          <button className="btn-upcoming" onClick={handleSetUpcomingAPI}>Upcoming</button>
        </div>
      </div>
    </nav>
  )
}

export default Filter
