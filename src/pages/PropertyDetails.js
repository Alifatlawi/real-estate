import React, { useState } from 'react';
// Import house data
import { housesData } from '../data';
// useParams
import { useParams } from 'react-router-dom';
// Import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => house.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>
          {property.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8 relative'>
            <img src={property.images[currentImageIndex]} alt={`${property.name} ${currentImageIndex + 1}`} className='mb-4' />
            <button onClick={prevImage} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full'>
              &#8249;
            </button>
            <button onClick={nextImage} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full'>
              &#8250;
            </button>
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div>
            <p>المدينة: {property.country}</p>
            <p>المنطقة: {property.address}</p>
            <p>الوكيل: {property.agent.name}</p>
            <p>عدد الغرف: {property.bedrooms}</p>
            <p>عدد الحمامات: {property.bathrooms}</p>
            <p>المساحة: {property.surface}</p>
            <p>الحالة: {property.description}</p>
            <p>السعر: {property.price} ({property.usd_equivalent})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
