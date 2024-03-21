import React, { useState } from 'react'
import {categories, data} from '../data/data'
import "preline/preline";

const Food = () => {
  //console.log(data)
  const [foods, setFoods] =useState(data)

  // Filter Type burgers/pizza/etc
  const fillterType = (category) =>{
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      })
    )
  }

  // Filter Price 
  const fillterPrice = (price) =>{
    setFoods(
      data.filter((item) =>{
        return item.price === price;
      })
    )
  }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

      {/**Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
          {/**Filter Type */}
          <div>
              
              <div>
              <div className="hs-dropdown relative inline-flex">
                <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-orange-200 bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <span class="inline-flex items-center"><svg class="flex-shrink-0 size-3.5 me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg></span>
                Filter Type
                <svg class="flex-shrink-0 size-3.5 text-gray-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>                </button>

                <div className="hs-dropdown-menu w-20 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
                  <button onClick={()=>setFoods(data)} className="hs-dropdown-toggle w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800  hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    All
                  </button>
                  <button onClick={()=>fillterType('burger')}className="hs-dropdown-toggle w-full py-3 px-4 flex justify-between items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    Burgers
                    <img width={30} height={30} src='https://img.freepik.com/free-vector/hamburger_53876-25481.jpg?t=st=1709557577~exp=1709561177~hmac=1a599cebdafbe02d9f2e162220b980a832905844416bd0c8369c782bc82a248d&w=740' />
                  </button>
                  <button onClick={()=>fillterType('pizza')} className="hs-dropdown-toggle w-full py-3 px-4 flex justify-between items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    Pizza
                    <img width={30} height={30} src="https://img.freepik.com/free-vector/pizza_53876-25479.jpg?t=st=1709560217~exp=1709563817~hmac=18b5f034b4ede6ea46ea3946ed1eae0356dc59121c68cb25e9534510813b5bf9&w=740" />
                  </button>
                  <button onClick={()=>fillterType('salad')} className="hs-dropdown-toggle w-full py-3 px-4  flex justify-between items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    Salads
                    <img width={30} height={30} src="https://img.freepik.com/free-vector/fresh-vegetarian-meal-bowl_24877-82370.jpg?t=st=1709560337~exp=1709563937~hmac=c38585319f96801d1924ce3f8ceee47820ba81e1e28918b4b8cdc3da36560187&w=740" />
                  </button>
                  <button onClick={()=>fillterType('chicken')} className="hs-dropdown-toggle w-full py-3 px-4  flex justify-between items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    Chicken
                    <img width={30} height={30} src="https://img.freepik.com/free-vector/vector-icon-set-flat-chicken-vings-chicken-tighs-design-element-logo-ad-menu_134830-1192.jpg?t=st=1709560368~exp=1709563968~hmac=52b67894475eec3f2735965f5b1327f9b32232747368118004d9a7adef0c5261&w=1380" />
                  </button>
                </div>
              </div>
              </div>
          </div>
          {/**Filter Price */}
          <div>
          <div className="hs-dropdown relative inline-flex">
                <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-orange-200 bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <span class="inline-flex items-center"><svg class="flex-shrink-0 size-3.5 me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg></span>
                Filter Price
                  <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
                  <button onClick={()=>fillterPrice('$')} className="hs-dropdown-toggle w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    $
                  </button>
                  <button onClick={()=>fillterPrice('$$')} className="hs-dropdown-toggle w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    $$
                  </button>
                  <button onClick={()=>fillterPrice('$$$')} className="hs-dropdown-toggle w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    $$$
                  </button>
                  <button onClick={()=>fillterPrice('$$$$')} className="hs-dropdown-toggle w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-orange-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" style={{ border: "none" }}>
                    $$$$
                </button>

                  
                </div>
              </div>
          </div>
      </div>
      {/**Display Foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {
          foods.map((item,index)=> (
            <div key={index} className='border shadow-lg rounded-xl hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg '/>
              <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 px-4 rounded-full'>{item.price}</span>
              </p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Food