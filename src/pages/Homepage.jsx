import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import TvShow from './TvShow.jsx'

const Homepage = () => {
  const [displayShows, setDisplayShows] = useState([[]])
  const [randomShow, setRandomShow] = useState(0)

  const fetchDataShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US&page=1'
    )

    console.log(resp.data)
    setDisplayShows(resp.data.results)
    setRandomShow(Math.floor(Math.random() * resp.data.results.length))
  }

  useEffect(() => {
    fetchDataShows()
  }, [])
  return (
    <>
      <h1 className="header">Top Rated TV Show of the Day!</h1>
      <h2 className="rando-cont">{displayShows[randomShow].name}</h2>
      <main>
        {displayShows.map((results, i) => {
          return (
            <div key={i}>
              <section className="body-cont">
                <div className="image-cont">
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${results.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="show-info-cont">
                  <h3 className="title">{results.name}</h3>
                  <p>First Aired {results.first_air_date}</p>
                  <p>{results.overview}</p>
                  <p>Vote Average {results.vote_average}</p>
                  <Link to={`/${results.id}`} className="cast-link">
                    Cast
                  </Link>
                </div>
              </section>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default Homepage
