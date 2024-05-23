import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <div className='container mx-auto px-4 py-8 mt-8'>
        <HouseList />
      </div>
    </div>
  );
};

export default Home;
