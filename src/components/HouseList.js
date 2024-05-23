import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';
// import components
import House from './House';
// import link
import { Link } from 'react-router-dom';
// import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[calc(100vh-640px)]'>
        <ImSpinner2 className='animate-spin text-violet-700 text-6xl' />
      </div>
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='house-list-section mb-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
