import React from 'react'

const Mapstv = () => {
return (
<div name='mapstv' className='w-full bg-[#0a192f] text-gray-300 py-36'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                Maps TV
            </p>
            <p className='py-6'>// I also make vlogs content for fun</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 gap-6'>
            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/F_uV5e0nGlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/cIjD7uu_6vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/0GvW3zX64Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/nrhVbe_ZdaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/fHzBGWnZQCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/pQsxwO5qBcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/aXC0RcfGMqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/SzApILBiAFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/SGvtNamXhWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/Emjaw_LyLlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
        </div>
        
    </div>
</div>
)
}

export default Mapstv