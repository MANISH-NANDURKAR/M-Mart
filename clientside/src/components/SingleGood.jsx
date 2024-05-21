import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleGood = () => {
  const {_id,name,ImgURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={ImgURL} className='h-96'/>
      <h2>{name}</h2>
    </div>
  )
}

export default SingleGood
