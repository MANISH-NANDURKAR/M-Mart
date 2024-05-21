import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/**left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and sell Goods <span className='text-blue-700'>for the best prices</span></h2>
            <p className='md: w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates possimus atque quaerat laudantium voluptatem voluptate odio inventore quae aperiam molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quidem.</p>
            <div>
                <input type="search" name='search' id='search'placeholder='SearchGoods' className='py-2 px-2 rounded-s-sm outline-none' />
                <button className='bg-blue-700 px-6 py-2 text-white font font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        {/** right side*/}
        <div>
            {/* <BannerCard/> */}
          {/* <h1>right side</h1> */}
        </div>
      </div>
    </div>
  )
}

export default Banner
