import React from 'react';

const Banner = () => {
    return (
      
      
      <div className="news-container  text-center w-full  px-10 mb-12 xl:mb-0 xl:pr-16 ">
       
  
       
        <h2 className="max-w-full  mb-6 font-sans text-4xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
        With our extensive collection of televisions, you can enjoy stunning visuals, vibrant colors, and immersive sound for your favorite movies, shows, and gaming sessions. From sleek LED TVs to cutting-edge smart TVs, we have the perfect screen size and features to match your preferences.
          
        </h2> 
       
        <a
          href="/Places"
          aria-label=""
          className="inline-flex btn items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
        >
          lets exploring Products
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>

    );
};

export default Banner;