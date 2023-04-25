import React from 'react';
import axios from 'axios';
import FilmCard from '../Components/FilmCard';

import { useEffect, useState } from 'react';

const Home = () => {
    const API_URL = 'https://swapi.dev/api/films';

  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get(API_URL).then(function(response){
      setFilms(response.data.results);
    }, [])
  });

  return (
    <div className='film-list'>
    {
        films.map((film, index) => (
          <FilmCard film={film} key={index}/>
        ))
       }
    </div>
  )
}

export default Home