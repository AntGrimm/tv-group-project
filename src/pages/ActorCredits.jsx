import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ActorCredits = props => {
  const [actorData, setActorData] = useState([])
  const actorSearchTerm = props.match.params.actors
  const showSearchTerm = props.match.params.results

  const fetchDataActors = async () => {
    console.log(`${actorSearchTerm}`)
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${actorSearchTerm}/tv_credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US
      `
    )
    console.log(resp.data)
    setActorData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataActors()
  }, [])

  return (
    <>
      <Link to={`/${showSearchTerm}`}> &laquo; Back </Link>
      <section>
        <ul className="tv-credit-list">
          TV Credits:
          {actorData.map((shows, j) => {
            return (
              <li className="tv-credits" key={j}>
                <img
                  className="tv-credits-poster"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${shows.poster_path}`}
                />
                <p>{shows.name}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default ActorCredits
