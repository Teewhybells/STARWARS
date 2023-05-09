import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = (props) => {
  const id = props.film.url.substr(props.film.url.length-2, 1)
  
  return (
    <div className='film-card'>
        <h1>{props.film.title}</h1>
        <div className='film-date'>{props.film.release_date}</div>
        <p>{props.film.opening_crawl}</p>
        <hr />
        <Link className='more' to={`/movie/${id}`}>More Info</Link>
    </div>
  )
}

export default FilmCard