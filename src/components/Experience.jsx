import React from 'react';

const Experience = () => {
return (
<div name='experience' className='w-full bg-[#0a192f] text-gray-300 py-36'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-5xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
        <p className='py-4'>// These are the companies I've worked with</p>
        </div>
            <div class="grid grid-cols-1 max-w-[600px] mx-auto pt-20">
                <div class="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                    <h1
                        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
                        2022</h1>
                    <h1 class="font-semibold text-xl dark:text-black">Web Developer</h1>
                    <p class="text-gray-500">MicronetBD</p>
                    <p class="text-gray-600 my-2">Lead frontend engineer and backend developer on building web apps for health care organization.</p>
                </div>
                <div class="divider-container flex flex-col items-center -mt-2">
                    <div class="w-4 h-4 bg-black dark:bg-pink-500 rounded-full relative z-10">
                        <div class="w-4 h-4 bg-black dark:bg-pink-600 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div class="w-1 h-24 bg-gray-200 dark:bg-pink-600 rounded-full -mt-2"></div>
                </div>
                <div class="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                    <h1
                        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
                        2021</h1>
                    <h1 class="font-semibold text-xl dark:text-black">Web Developer</h1>
                    <p class="text-gray-500">Areascouts</p>
                    <p class="text-gray-600 my-2">Working on researching, designing, developing, and managing software running on Ruby on Rails. Work as well as Quality Assurance.</p>
                </div>
                 <div class="divider-container flex flex-col items-center -mt-2">
                    <div class="w-4 h-4 bg-black dark:bg-pink-500 rounded-full relative z-10">
                        <div class="w-4 h-4 bg-black dark:bg-pink-600 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div class="w-1 h-24 bg-gray-200 dark:bg-pink-600 rounded-full -mt-2"></div>
                </div>
                <div class="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                    <h1
                        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
                        2020</h1>
                    <h1 class="font-semibold text-xl dark:text-black">Web Developer</h1>
                    <p class="text-gray-500">Sun Asterisk Philippines</p>
                    <p class="text-gray-600 my-2">Pioneered and maintained information systems and internal business applications.</p>
                </div>
                <div class="divider-container flex flex-col items-center -mt-2">
                    <div class="w-4 h-4 bg-black dark:bg-pink-500 rounded-full relative z-10">
                        <div class="w-4 h-4 bg-black dark:bg-pink-600 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div class="w-1 h-24 bg-gray-200 dark:bg-pink-600 rounded-full -mt-2"></div>
                </div>
                <div class="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                    <h1
                        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
                        2020</h1>
                    <h1 class="font-semibold text-xl dark:text-black">Bootcamp Instructor</h1>
                    <p class="text-gray-500">Awesome Ars Academia</p>
                    <p class="text-gray-600 my-2">Leading and mentoring japanese students in web development. Taught fundamental HTML, CSS, Bootstrap, Mysql, and Ruby on Rails.</p>
                </div>
                <div class="divider-container flex flex-col items-center -mt-2">
                    <div class="w-4 h-4 bg-black dark:bg-pink-500 rounded-full relative z-10">
                        <div class="w-4 h-4 bg-black dark:bg-pink-600 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div class="w-1 h-24 bg-gray-200 dark:bg-pink-600 rounded-full -mt-2"></div>
                </div>
                <div class="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                    <h1
                        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
                        2019</h1>
                    <h1 class="font-semibold text-xl dark:text-black">Graduation</h1>
                    <p class="text-gray-500">University on Negros Occidental - Recoletos</p>
                    <p class="text-gray-600 my-2">Bachelor's degree in Information Technology.</p>
                </div>
                 <div class="divider-container flex flex-col items-center -mt-2">
                    <div class="w-4 h-4 bg-black dark:bg-pink-500 rounded-full relative z-10">
                        <div class="w-4 h-4 bg-black dark:bg-pink-600 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div class="w-1 h-24 bg-gray-200 dark:bg-pink-600 rounded-full -mt-2"></div>
                </div>
                <div class="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                    <h1
                        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-500">
                        2019</h1>
                    <h1 class="font-semibold text-xl dark:text-black">Intership</h1>
                    <p class="text-gray-500">Hybrain</p>
                    <p class="text-gray-600 my-2">Performed software development tasks, assisted in the design and
                        architecture of software applications, and communicated closely with senior software engineers.
                    </p>
                </div>
            </div>
    
    </div>
</div>
);
};

export default Experience;