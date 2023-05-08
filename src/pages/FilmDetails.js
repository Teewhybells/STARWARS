import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';
import Header from '../Components/Header';


const FilmDetails = () => {  
    const { url } = useParams();
    const API_URL = `https://swapi.dev/api/films/${url}`;  

  const [film, setFilm] = useState({})
  console.log(API_URL)
  let history = useNavigate();


  useEffect(() => {
    axios.get(API_URL).then(function(response){
      console.log(response.data);
      setFilm(response.data);
    }, [])
  });

  return (
    <div className="App">
    <Header />
        <div className='film-data'>
            <div><Link to={() => history(-1)}>Go back</Link></div>
            <h3>{film.title}</h3>
            <h4>Director: {film.director}</h4>
            <h4>Producer: {film.producer}</h4>

            <h4 className='leftAlign'>Description</h4>
            <p className='leftAlign'>{film.opening_crawl}</p>    
            <h4 className='leftAlign'>Charaters</h4>
            <p className='leftAlign'>{film.opening_crawl}</p>  
            <hr />
            
        </div>
    </div>
  )
}

export default FilmDetails