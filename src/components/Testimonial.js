import React from 'react'
import "preline/preline";

const Testimonial = () => {
    return (
        <div>
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">What our <span class="text-orange-600">customers</span> are saying</h1>
                        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores sint molestias perferendis voluptas cumque illum ipsa expedita veniam dolor.</p>

                        <div class="mt-7 grid gap-3 w-full sm:inline-flex">

                        </div>
                        {/**Start Slider For Test User */}
                        <div data-hs-carousel='{
                            "loadingClasses": "opacity-0",
                            "isAutoPlay": true
                        }' class="relative">
                            <div class="hs-carousel relative overflow-hidden w-full min-h-[150px] bg-white rounded-lg">
                                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                                    <div class="hs-carousel-slide">
                                        <div class="flex justify-center h-full p-6">
                                            <blockquote class="relative  ps-4 sm:ps-6 ">
                                                <p class="text-gray-800 sm:text-xl dark:text-white"><em>
                                                    I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.
                                                </em></p>

                                                <footer class="mt-4">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0">
                                                            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                        </div>
                                                        <div class="ms-4">
                                                            <div class="text-base font-semibold text-gray-800 dark:text-gray-400">Josh Grazioso</div>
                                                            <div class="text-xs text-gray-500">Source title</div>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div class="hs-carousel-slide">
                                        <div class="flex justify-center h-full p-6">
                                            <blockquote class="relative ps-4 sm:ps-6 ">
                                                <p class="text-gray-800 sm:text-xl dark:text-white"><em>
                                                    I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.
                                                </em></p>

                                                <footer class="mt-4">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0">
                                                            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                        </div>
                                                        <div class="ms-4">
                                                            <div class="text-base font-semibold text-gray-800 dark:text-gray-400">Josh Grazioso</div>
                                                            <div class="text-xs text-gray-500">Source title</div>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div class="hs-carousel-slide">
                                        <div class="flex justify-center h-full p-6">
                                            <blockquote class="relative  ps-4 sm:ps-6 ">
                                                <p class="text-gray-800 sm:text-xl dark:text-white"><em>
                                                    I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.
                                                </em></p>

                                                <footer class="mt-4">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0">
                                                            <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                        </div>
                                                        <div class="ms-4">
                                                            <div class="text-base font-semibold text-gray-800 dark:text-gray-400">Josh Grazioso</div>
                                                            <div class="text-xs text-gray-500">Source title</div>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                            </div>
                        </div>
                        {/**End Slider For Test User */}
                    </div>

                    <div class="relative ms-4">
                        <img class="w-full rounded-md" src="https://img.freepik.com/free-vector/conversation-concept-illustration_114360-1102.jpg?t=st=1710104806~exp=1710108406~hmac=0d84eaac0de6fd48706591893dbcdf7358ff8e85b605f54fb29f2c07bd07e12e&w=1380" alt="Image Description" />
                        <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

                        <div class="absolute bottom-0 start-0">
                            <svg class="w-2/3 ms-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                                <rect x="581" width="49" height="49" fill="currentColor" />
                                <rect x="581" width="49" height="64" fill="currentColor" />
                                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial