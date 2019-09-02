import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = props => {
  // const tvSearchTerm = props.params.match.results
  const [actorData, setActorData] = useState([])
  // const [showData, setShowData] = useState([])
  const tvSearchTerm = props.match.params.results

  // Remember to add {tvSearchTerm} back in where the "100" is to parameterize the fetch
  const fetchDataActors = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearchTerm}/credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
    )
    console.log(resp.data)
    setActorData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataActors()
  }, [])

  return (
    <>
      <Link to="/"> &laquo; Back </Link>
      <section>
        <ul>
          Cast:
          {actorData.map((actor, j) => {
            return (
              <li key={j}>
                <p>{actor.name}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default TvShow
