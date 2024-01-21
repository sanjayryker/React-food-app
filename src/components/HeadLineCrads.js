import React from 'react'

const HeadLineCrads = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 grid py-12 gap-6 md:grid-cols-3'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* OverLay */}
            <div className='absolute text-white h-full w-full rounded-xl bg-black/40'>
                <p className='font-bold pt-3 text-2xl px-2'>Sun's Out BOGO's Out</p>
                <p className='px-2'>Through 24/6 </p>
                <button className='border-orange-500 bg-white text-black absolute bottom-2 mx-2 hover:bg-orange-500  hover:text-white duration-300 '>Order Now</button>
            </div>
            <img className= 'w-full max-h-[180px] md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
        </div>

        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* OverLay */}
            <div className='absolute text-white h-full w-full rounded-xl bg-black/40'>
                <p className='font-bold pt-3 text-2xl px-2'>New Restaurants</p>
                <p className='px-2'>Added Daily </p>
                <button className='border-orange-500 bg-white text-black absolute bottom-2 mx-2  hover:bg-orange-500  hover:text-white duration-300'>Order Now</button>
            </div>
            <img className= 'w-full max-h-[180px] md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
        </div>

        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* OverLay */}
            <div className='absolute text-white h-full w-full rounded-xl bg-black/40'>
                <p className='font-bold pt-3 text-2xl px-2'>Freshness Out Of Park</p>
                <p className='px-2'> Sea Treats </p>
                <button className='border-orange-500 bg-white text-black absolute bottom-2 mx-2  hover:bg-orange-500  hover:text-white duration-300'>Order Now</button>
            </div>
            <img className= 'w-full max-h-[180px] md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=''/>
        </div>

    </div>
  )
}

export default HeadLineCrads