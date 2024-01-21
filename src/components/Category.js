import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <h1 className='text-orange-500 text-4xl font-bold text-center py-4' >Top Rated Menu Items</h1>

        {/* Category List */}

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
            {categories.map((item,index) => 
            (
                <div key={index} className='bg-gray-200 flex justify-between items-center p-4 rounded-lg '>
                    <h2 className='sm:text-xl font-bold'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name}></img>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category