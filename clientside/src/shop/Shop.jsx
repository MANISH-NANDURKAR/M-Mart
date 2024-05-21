import React, { useEffect, useState } from 'react'
import {Card} from 'flowbite-react';

const Shop = () => {
  const [goods , setGoods] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/all-items").then(res =>res.json()).then(data => setGoods(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Goods are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-col-1">

        {
          goods.map(good => <Card >
          <img src = {good.ImgURL}/>

            <h5 className='text-2xl font-bold tracking-tight text-gray-900 '>
              <p>Lorem ipsum dolor sit amet.</p>
            </h5>
            <p className='font-normal text-gray-700'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse harum enim distinctio consequatur quasi eum soluta id eligendi magni.
              </p>
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
