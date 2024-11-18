import React from 'react'
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId, bool}) => {
  const trailerMovie = useSelector(store=> store.movie.trailerMovie);
  useMovieById(movieId);

  // Check if trailerMovie exists and has a valid key
  if (!trailerMovie || !trailerMovie.key) {
    return <div>Loading trailer...</div>;
  }

  return (
    <div className = "w-[vw] overflow-hidden">
        <iframe className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`} 
            src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=5vnbvNX1i5fpoyhP&autoplay=1&mute=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allowFullScreen
        ></iframe>
      
    </div>
  )
}

export default VideoBackground
