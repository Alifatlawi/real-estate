import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='banner-section h-full max-h-[640px] mb-8 xl:mb-24 bg-gradient-to-r from-blue-50 to-indigo-100 relative'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='lg:mr-8 xl:mr-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-bold leading-none mb-6 text-gray-800'>
            <span className='text-violet-700'>اشترِ</span> شقتك في تركيا
          </h1>
          <p className='max-w-[480px] mb-8 text-gray-600'>
            اكتشف مجموعة واسعة من الشقق للبيع في تركيا بأفضل الأسعار والعروض. احصل على تحليل مفصل ومساعدة في كل خطوة لتحقيق حلمك.
          </p>
        </div>
        <div className='flex-1 flex justify-center lg:justify-end items-center lg:items-end'>
          <img src={Image} alt='House Banner' className='w-full max-w-md rounded-lg shadow-lg object-cover' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
