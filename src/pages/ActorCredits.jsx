import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ActorCredits = props => {
  const [actorData, setActorData] = useState([])
  const [creditsData, setCreditsData] = useState([])
  const actorSearchTerm = props.match.params.actors
  const showSearchTerm = props.match.params.results

  const fetchDataActors = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${actorSearchTerm}?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US
      `
    )
    console.log(resp.data)
    setActorData(resp.data)
  }

  const fetchDataCredits = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${actorSearchTerm}/tv_credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US
      `
    )
    console.log(resp.data)
    setCreditsData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataActors()
    fetchDataCredits()
  }, [])

  return (
    <>
      <Link to={`/${showSearchTerm}`}> &laquo; Back </Link>
      <section className="actor-details">
        <img
          className="actor-credits-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actorData.profile_path}`}
        />
        <div className="actor-content">
          <h1 className="actor-details-header">{actorData.name}</h1>
          <h3>Biography</h3>
          <p className="actor-details-overview">{actorData.biography}</p>
        </div>
      </section>
      <section>
        <h1>TV Credits:</h1>
        <ul className="tv-credit-list">
          {creditsData.map((shows, j) => {
            return (
              <li className="tv-credits" key={j}>
                <Link to={`/${shows.id}`}>
                  <img
                    className="tv-credits-poster"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${shows.poster_path}`}
                    alt={`Poster of ${shows.name}`}
                  />
                  <p>{shows.name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default ActorCredits
