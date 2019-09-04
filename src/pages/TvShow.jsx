import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = props => {
  const [castData, setCastData] = useState([])
  const [showData, setShowData] = useState([])
  const tvSearchTerm = props.match.params.results

  const fetchDataShows = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearchTerm}?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
    )
    console.log(resp.data)
    setShowData(resp.data)
  }

  const fetchDataCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearchTerm}/credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
    )
    console.log(resp.data)
    setCastData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataCast()
    fetchDataShows()
  }, [])

  return (
    <>
      <Link to="/"> &laquo; Back </Link>
      <section className="series-details">
        <img
          className="series-details-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showData.poster_path}`}
        />
        <div className="series-content">
          <h1 className="series-details-header">{showData.name}</h1>
          <h3>Overview</h3>
          <p className="series-details-overview">{showData.overview}</p>
        </div>
      </section>
      <section className="series-cast">
        <h1>Series Cast</h1>
        <ul className="actor-list">
          {castData.map((actor, j) => {
            return (
              <li className="actors" key={j}>
                <Link to={`/${tvSearchTerm}/${actor.id}`}>
                  <img
                    className="actor-picture"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actor.profile_path}`}
                    alt={`Picture of ${actor.name}`}
                  />
                  <p className="actor-name">{actor.name}</p>
                </Link>
                <p>{actor.character}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default TvShow
