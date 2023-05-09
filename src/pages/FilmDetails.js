import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { Link, } from "react-router-dom";
import axios from 'axios';
import Header from '../Components/Header';
import MiniCard from '../Components/MiniCard';


const FilmDetails = () => {  
    const { url } = useParams();
    const API_URL = `https://swapi.dev/api/films/${url}`;  

  const [film, setFilm] = useState({})


  useEffect(() => {
    axios.get(API_URL).then(function(response){
      setFilm(response.data);
      console.log(response.data)
    }, [])
  });

  return (
    <div className="App">
    <Header />
        <div className='film-data'>
            <div className='leftAlign '><Link to="/" className='nav-link' >Go back</Link></div>
            <h3>{film.title}</h3>
            <h4>Director: {film.director}</h4>
            <h4>Producer: {film.producer}</h4>

            <h4 className='leftAlign'>Description</h4>
            <p className='leftAlign'>{film.opening_crawl}</p>  
            <hr />  
            <h4 className='leftAlign'>Charaters</h4>
            <div>
              <ul className='row'>
              {
                film.characters?.map((character) =>(<li className='col-2'><MiniCard url={character} /></li>))
              }
              </ul>
            </div>
            <hr />
            <h4 className='leftAlign'>Planets</h4>
            <div>
              <ul className='row'>
              {
                film.planets?.map((planetUrl) =>(<li className='col-2'><MiniCard url={planetUrl} /></li>))
              }
              </ul>
            </div>
            <hr />
            <h4 className='leftAlign'>Species</h4>
            <div>
              <ul className='row'>
              {
                film.species?.map((url) =>(<li className='col-2'><MiniCard url={url} /></li>))
              }
              </ul>
            </div>
            <hr />
            <h4 className='leftAlign'>Starships</h4>
            <div>
              <ul className='row'>
              {
                film.starships?.map((url) =>(<li className='col-2'><MiniCard url={url} /></li>))
              }
              </ul>
            </div>
            <hr />
            <h4 className='leftAlign'>Vehicles</h4>
            <div>
              <ul className='row'>
              {
                film.vehicles?.map((url) =>(<li className='col-2'><MiniCard url={url} /></li>))
              }
              </ul>
            </div>
            <hr />
            
        </div>
    </div>
  )
}

export default FilmDetails