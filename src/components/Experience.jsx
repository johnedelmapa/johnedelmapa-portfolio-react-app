import React from 'react'

const Experience = () => {
return (
<div name='experience' className='w-full mt-40 bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
            <p className='py-4'>// These are the companies I've worked with</p>
        </div>

        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Web Developer at <b>MicronetBD</b></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lead frontend engineer and backend developer on building web apps for health care organization.</p>
            </li>

            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Web Developer at <b>Areascouts</b></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Working on researching, designing, developing, and managing software running on Ruby on Rails. Work as well as Quality Assurance</p>
            </li>

            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Web Developer at <b>Sun Asterisk</b></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Pioneered and maintained information systems and internal business applications.</p>
            </li>

            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bootcamp Instructor at <b>Awesome Ars Academia</b></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Leading and mentoring japanese students in web development. Taught fundamental HTML, CSS, Bootstrap, Mysql, and Ruby on Rails.</p>
            </li>

            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Graduation at <b>University on Negros Occidental - Recoletos</b></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Bachelor's degree in Information Technology.</p>
            </li>

            <li class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Intership at <b>Hybrain</b></h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Performed software development tasks, assisted in the design and architecture of software applications, and communicated closely with senior software engineers.</p>
            </li>
        </ol>

    </div>
</div>
);
}

export default Experience