import React from 'react'
import VideoTile from './VideoTile'
import VideoBackgraound from './VideoBackgraound'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if (movies === null) return
    const mainMovies = movies[0];
    const {original_title, overview, id} = mainMovies;
   
  return (
    <div>
        <VideoTile title={original_title} overview={overview}/>
        <VideoBackgraound movieId={id}/>
    </div>
  )
}

export default MainContainer