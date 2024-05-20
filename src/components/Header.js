import React from 'react';
// import link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <h1 className='text-3xl font-bold text-violet-700'>HAYDER</h1>
        </Link>
        <div className='flex items-center gap-6'>
          {/* Additional items can go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
