import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import Medrocket from '../assets/medrocket.jpg';
import Postrio from '../assets/postrio.jpg';

const Home = () => {
return (
<div name='home' className='w-full h-screen bg-[#0a192f]'>
  {/* Container */}
  <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full sm:h-5/6'>
    <p className='text-pink-600'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Johnedel Mapa</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer</h2>
    <p className='text-[#8882b0] py-4 max-w-[700px]'>A 23-year-old web developer based in Bacolod, Philippines.</p>
    <div>
      <a href='/work'>
      <button
        className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        View Work
        <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-4' />
        </span>
      </button>
      </a>
    </div>
  </div>

  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full sm:h-5/6'>
    <div className='pb-8'>
      <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        Recent Projects
      </p>

    </div>

    {/* Container */}
    <div className='grid sm:grid-cols-2 gap-4'>

      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Medrocket})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto home-content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Ruby on Rails App
          </span>
          <div className='pt-8 text-center'>
            <a href='https://dev.medrocket.com/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Postrio})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto home-content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Web Design
          </span>
          <div className='pt-8 text-center'>
            <a href='https://www.postrio.io/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default Home