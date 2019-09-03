import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = props => {
  const [castData, setCastData] = useState([])
  // const [showData, setShowData] = useState([])
  const tvSearchTerm = props.match.params.results

  // const fetchDataShows = async () => {
  //   const resp = await axios.get(
  //     `https://api.themoviedb.org/3/tv/${tvSearchTerm}?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
  //   )
  //   console.log(resp.data)
  //   setShowData(resp.data.name)
  // }

  const fetchDataCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearchTerm}/credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
    )
    console.log(resp.data)
    setCastData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataCast()
    // fetchDataShows()
  }, [])

  return (
    <>
      <Link to="/"> &laquo; Back </Link>
      {/* <section className="series-details">
        {showData.map((show, i) => {
          return <h1>{show.name}</h1>
        })}
      </section> */}
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
                    alt={`${actor.name}`}
                  />
                  <p className="actor-name">{actor.name}</p>
                  <p>Character Played: {actor.character}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default TvShow
