import React from 'react'

const VideoTile = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='my-4'>
            <button className='bg-white text-black p-2 px-8 rounded-lg hover:bg-gray-200'>Play</button>
            <button className='mx-2 bg-gray-800 text-white p-2 px-8 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTile