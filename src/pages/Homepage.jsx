import React from 'react'
import Axios from 'Axios'

const Homepage = () => {
  const fetchDataShows = async () => {
    const resp = await Axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=777aea70df4e4c6df6c5d0195ce2d746&language=en-US&page=1'
    )
    console.log(resp.data)
  }
  return (
    <>
      <ul>
        <header>Top Rated TV Show of the Day!</header>
        <li>TV Show</li>
      </ul>
      <ul>
        <li>TV Show 1</li>
        <li>TV Show 2</li>
        <li>TV Show 3</li>
        <li>TV Show 4</li>
        <li>TV Show 7</li>
      </ul>
    </>
  )
}

export default Homepage
