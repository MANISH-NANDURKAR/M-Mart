import React from 'react';
import { Link } from 'react-router-dom';

import images from "../assets/pics/img1.jpeg";

const LastPurchase = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
        <div className='md w-1/2'>
            <img src={images} alt="" className='rounded md:w-10/12'/>
        </div>
        
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:3/4 leading-snug'>Find last purchase<span className='text-blue-700'> Goods Here!</span></h2>

            <p className='mb-10 text-lg md:w-5/6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, commodi?
            </p>
            {/* stats */}
            <div>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <h3 className='text-3xl font-bold'>Complete daliy needs !</h3>
                </div>
            </div>

            <Link to ='/shop' className='mt-11 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                    Explore More
                </button>
            </Link>
        </div>
    </div>
  );
};

export default LastPurchase;
