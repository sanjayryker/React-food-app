import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*OverLay */}
            <div className='absolute text-gray-200 flex flex-col justify-center w-full h-full bg-black/40 px-2'>
                <h2 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-500'>Best</span></h2>
                <h2 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-orange-500'>Foods</span>  Delivered</h2>
            </div>
            <img  className='object-cover w-full max-h-[500px]'  src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
        </div>
    </div>
  )
}

export default Hero