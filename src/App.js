import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen max-w-[1440px] mx-auto bg-white'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
