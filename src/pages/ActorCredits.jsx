import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ActorCredits = props => {
  const [actorData, setActorData] = useState([])
  const actorSearchTerm = props.match.params.results

  const fetchDataActors = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/122616-grant-gustin`
    )
    console.log(resp.data)
    setActorData(resp.data.cast)
  }

  return <div></div>
}

export default ActorCredits
