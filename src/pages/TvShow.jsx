import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = props => {
  const [castData, setCastData] = useState([])
  const tvSearchTerm = props.match.params.results

  const fetchDataCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearchTerm}/credits?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US`
    )
    console.log(resp.data)
    setCastData(resp.data.cast)
  }

  useEffect(() => {
    fetchDataCast()
  }, [])

  return (
    <>
      <Link to="/"> &laquo; Back </Link>
      <section>
        <ul>
          Cast:
          {castData.map((actor, j) => {
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
