import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({posterPath, movieId}) => {
  const dispatch = useDispatch();

  if(posterPath === null) return null;

  const handelOpen = () =>{
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }
  return (
    <div className='w-48 pr-2' onClick={handelOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie-banner' />
    </div>
  )
}

export default MovieCard
