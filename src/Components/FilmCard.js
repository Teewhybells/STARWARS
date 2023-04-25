import React from 'react'

const FilmCard = (props) => {
    console.log(props)
  return (
    <div className='film-card'>
        <h1>{props.film.title}</h1>
        <div className='film-date'>{props.film.release_date}</div>
        <p>{props.film.opening_crawl}</p>
        <hr />
        <button className='more'>More Info</button>
    </div>
  )
}

export default FilmCard