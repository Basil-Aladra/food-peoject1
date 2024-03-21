import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/**Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BEGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:h-[200px] w-full object-cover rounded-xl'
            src='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </div>

         {/* Card */}
         <div className='rounded-xl relative'>
            {/**Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BEGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:h-[200px] w-full object-cover rounded-xl'
            src='https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </div>

         {/* Card */}
         <div className='rounded-xl relative'>
            {/**Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BEGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:h-[200px] w-full object-cover rounded-xl'
            src='https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </div>
    </div>
  )
}

export default HeadLineCards