import React, { useState } from 'react'
import Movie from './Movie'

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Rambo: First Blood',
      price: '$10',
      id: 266124
    },
    {
      name: 'Rambo: II',
      price: '$10',
      id: 266130
    },
    {
      name: 'Rambo: 3',
      price: '$10',
      id: 266140
    },
  ]);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={ movie.price}/>
      ))}
    </div>
  )
}
export default MovieList;