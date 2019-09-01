import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
  const [displayShows, setDisplayShows] = useState([])

  const fetchDataShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US&page=1'
    )

    console.log(resp.data)
    setDisplayShows(resp.data.results)
  }

  useEffect(() => {
    fetchDataShows()
  }, [])
  return (
    <>
      <header>Top Rated TV Show of the Day!</header>
      <h2>Random tv show here</h2>
      {displayShows.map((results, i) => {
        return (
          <div key={i}>
            <div className="image-cont">
              <img
                className="col s3"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${results.poster_path}`}
                alt=""
              />
            </div>

            <p>{results.name}</p>
            <p>{results.first_air_date}</p>
            <p>{results.overview}</p>
            <p>Vote Average {results.vote_average}</p>
          </div>
        )
      })}
    </>
  )
}

export default Homepage

{
  /* <section className="show-list">
          <div className="row">
            {tvShows.map((tvShow, i) => {
              return (
                <div key={i} className="col l6 show-card-area">
                  <div className="show-poster-area">
                    <Link to={`/tv/${tvShow.id}`}>
                      <img
                        className="col s3"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${tvShow.poster_path}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <section className="col s6">
                    <h3>{tvShow.name}</h3>
                    <p>Rating: {tvShow.vote_average}</p>
                    <p>First Aired: {tvShow.first_air_date}</p>
                    <p>{tvShow.overview}</p>
                  </section> */
}
