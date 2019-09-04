import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = props => {
  const [castData, setCastData] = useState([])
  const [showData, setShowData] = useState([])
  const [rateShow, setRateShow] = useState('')
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

  const rateTvShow = async e => {
    e.preventDefault()
    const resp = await axios.post(
      `https://api.themoviedb.org/3/tv/${tvSearchTerm}/rating?api_key=777aea70df4e4c6df6c5d0195ce2d746&value=${rateShow}`
    )
    console.log(resp.data)
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
      <form onSubmit={rateTvShow}>
        <label>Rate this Show</label>
        <input
          type="text"
          placeholder="Rate this Show 1-10"
          value={rateShow}
          onChange={e => setRateShow(e.target.value)}
        />
        <button>Submit</button>
      </form>
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
