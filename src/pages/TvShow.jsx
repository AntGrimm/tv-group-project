import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = () => {
  // const tvSearchTerm = props.params.match.results
  const [actorData, setActorData] = useState([])
  const [showData, setShowData] = useState([])

  const fetchDataShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US&page=1'
    )
    console.log(resp.data)
    setShowData(resp.data.results)
  }

  // Remember to add {tvSearchTerm} back in where the "100" is to parameterize the fetch
  const fetchDataActors = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/100/credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
    )
    console.log(resp.data)
    setActorData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataActors()
    fetchDataShows()
  }, [])

  return (
    <>
      <Link to="/"> &laquo; Back </Link>
      <section>
        <ul>
          {showData.map((show, i) => {
            return (
              <li key={i}>
                <p>Name: {show.name}</p>
                <p>First Aired: {show.first_air_date}</p>
                <p>{show.overview}</p>
              </li>
            )
          })}
        </ul>
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
