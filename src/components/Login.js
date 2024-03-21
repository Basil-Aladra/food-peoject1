import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import "preline/preline";
const Login = () => {
  return (
    <div>
        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  text-black disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
         <FaUserLarge size={20} className='mr-2'/>
        </button>

<div id="hs-custom-backdrop-modal" class="hs-overlay  hs-overlay-backdrop-open:bg-orange-200/90 hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div class="flex flex-col bg-white  border-b-4 border-r-2 border-orange-500 shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 class="font-bold text-gray-800 dark:text-white">
          Login Form
        </h3>
        <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
          <span class="sr-only">Close</span>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto flex justify-center">
      <div>
           
            <div class="relative mb-3">
                <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="py-3 px-4 ps-11 block w-96 border border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="you@site.com"/>
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg class="flex-shrink-0 size-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
            </div>

       
                <div class="max-w-sm">
                <div class="flex mb-2">
                    <div class="flex-1">
                    <input type="password" id="hs-strong-password-base" class="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Enter password"/>
                    <div data-hs-strong-password='{
                            "target": "#hs-strong-password-base",
                            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-orange-500 opacity-50 mx-1"
                        }' class="flex mt-2 -mx-1"
                    ></div>
                    </div>
                </div>
                </div>

        </div>
      </div>
      
      <div class="grid grid-cols-1 text-center items-center gap-x-2 py-3 px-4 ">
     <a href='' className='mb-3'>Don't have an account? <span className='text-orange-500 hover:text-orange-700 font-medium'>Create an account</span></a>
      <button type="button" class="py-3 px-10   gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          login
        </button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login

{/** <FaUserLarge size={20} className='mr-2'/> */}