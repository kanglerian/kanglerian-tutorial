import React, {useState} from 'react'
import Banner from '../components/Banner'

const Home = () => {
  // eslint-disable-next-line
  return (
    <div className='container mx-auto px-4 py-5 mt-3'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-5'>
        <div className='flex-1'>
          <iframe className='w-full h-80 rounded-xl border-4 border-gray-800' src="https://www.youtube.com/embed/rPEOw9_nrjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='flex-1 space-y-4'>
          <h1 className='text-2xl font-bold text-gray-800'>Penjelasan JSON Server </h1>
          <div className='flex gap-2'>
            <span className='text-xs bg-sky-200 px-3 py-1 rounded'>Front End Development</span>
            <span className='text-xs bg-sky-200 px-3 py-1 rounded'>Front End Development</span>
          </div>
          <p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className='bg-red-500 text-white px-4 py-2 rounded-md text-sm'>Lihat selengkapnya</button>
        </div>
      </div>
    </div>
  )
}

export default Home