import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4'>
        <img className='w-{350}' alt='Movie Card' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard