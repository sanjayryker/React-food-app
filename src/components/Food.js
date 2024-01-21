import React, { useState } from 'react'
import {data} from '../data/data'

const Food = () => {

    const[foods,setFoods] = useState(data)

    // Filter foods

    const filterType = (categories) =>
    {
        setFoods( 
            data.filter((item) =>
            {
                return item.category === categories
            })
        )
    }

    const filterPrice = (price) =>
    {
        setFoods(
            data.filter((prices) => 
            {
                return prices.price === price
            })
        )
    }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-8'> 
    <p className='text-orange-600 text-center text-4xl font-bold'> Top Rated Menu Items</p>
     {/* Filter row */}
     <div className='flex flex-col lg:flex-row justify-between pt-3'>
        {/*Filter Type */}
        <div>
            <p className='font-bold text-gray-700 py-3'>Filter Type</p>
            <div className='flex w-full flex-wrap gap-4  max-w-[500px]'>
                <button onClick={() => setFoods(data)} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>All</button>
                <button onClick={() => filterType('burger')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Burgers</button>
                <button onClick={() => filterType('pizza')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Pizzas</button>
                <button onClick={() => filterType('salad')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Salads</button>
                <button onClick={() => filterType('chicken')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'>Chicken</button>
            </div>
        </div>

        {/* Filter Price */}
        <div>
            <p className='font-bold text-gray-700 py-3'> Price </p>
            <div className='flex w-full justify-between gap-4 max-w-[400px]'>
                <button onClick={() => filterPrice('$')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'> $ </button>
                <button onClick={() => filterPrice('$$')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'> $$ </button>
                <button onClick={() => filterPrice('$$$')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'> $$$ </button>
                <button onClick={() => filterPrice('$$$$')} className='border-orange-600 hover:bg-orange-600 hover:text-white duration-300'> $$$$ </button>
            </div>
        </div>
     </div>

     <div className='grid grid-cols-2 gap-2 pt-4  lg:grid-cols-4 '>
        {foods.map( (item , index) => (

            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                <img src={item.image} alt={item.name} className='w-full h-[200px]  object-cover rounded-t-lg'/>
                <div className='flex justify-between p-3'>
                    <p className='font-bold'>{item.name}</p> 
                    <p><span className='bg-orange-500 rounded-full p-1 text-white ml-1'>{item.price}</span></p>
                </div>
            </div>

        ))}
     </div>
    </div>
  )
}

export default Food