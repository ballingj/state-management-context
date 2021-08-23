import React, { useContext} from 'react'
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <nav className='nav'>
      <h2>Movie List</h2>
      <p>Number of Movies: { movies.length} </p>
    </nav>
  )
}
export default Nav;