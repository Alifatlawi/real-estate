import React from 'react';
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-lg p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8 rounded-lg' src={house.images[0]} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 py-1 inline-block'>
          {house.type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 py-1 inline-block'>
          {house.country}
        </div>
      </div>
      <div className='text-lg font-semibold text-gray-800 mb-2'>{house.address}</div>
      <div className='flex gap-x-4 my-4 text-gray-600'>
        <div className='flex items-center gap-1'>
          <BiBed className='text-2xl' />
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center gap-1'>
          <BiBath className='text-2xl' />
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center gap-1'>
          <BiArea className='text-2xl' />
          <div className='text-base'>{house.surface} m²</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600'>
        {house.price}
      </div>
    </div>
  );
};

export default House;
