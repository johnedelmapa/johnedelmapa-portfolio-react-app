import React from 'react';
import Medrocket from '../assets/medrocket.jpg';
import Postrio from '../assets/postrio.jpg';
import Areascouts from '../assets/areascouts.jpg';
import AreascoutsWeb from '../assets/areascouts1.jpg';
import IAM from '../assets/iam.jpg';
import Booster from '../assets/01booster.jpg';
import Educhamp from '../assets/educhamp.jpg';
import AirbnbClone from '../assets/airbnb.jpg';
import Relocationplus from '../assets/relocationplus.jpg';

const Work = () => {
return (
<div name='work' className='w-full bg-[#0a192f] text-gray-300'>
  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
      <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        Work
      </p>
      <p className='py-6'>// Check out some of my recent work</p>
    </div>

    {/* Container */}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Medrocket})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Areascouts})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Ruby on Rails App
          </span>
          <div className='pt-8 text-center'>
            <a href='https://app.areascouts.com/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${AreascoutsWeb})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Web Design
          </span>
          <div className='pt-8 text-center'>
            <a href='https://areascouts.online/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Booster})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Ruby on Rails App
          </span>
          <div className='pt-8 text-center'>
            <a href='https://01booster.com/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${IAM})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Shopify Ecommerce
          </span>
          <div className='pt-8 text-center'>
            <a href='https://shopiamclothing.com/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Educhamp})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Ruby on Rails App
          </span>
          <div className='pt-8 text-center'>
            <a href='https://educhampapp.herokuapp.com/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${AirbnbClone})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Ruby on Rails App
          </span>
          <div className='pt-8 text-center'>
            <a href='https://airbnbcloneapp.herokuapp.com/' target='_blank'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Grid Item */}
      <div style={{ backgroundImage: `url(${Relocationplus})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Web Design
          </span>
          <div className='pt-8 text-center'>
            <a href='https://relocationsplus.com/' target='_blank'>
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
);
};

export default Work;