import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Rambo: First Blood',
      price: '$10',
      id: 266124
    },
    {
      name: 'Rambo 2',
      price: '$10',
      id: 266130
    },
    {
      name: 'Rambo 3',
      price: '$10',
      id: 266140
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}
