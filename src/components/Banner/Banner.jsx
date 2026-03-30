import { Play } from 'lucide-react';
import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-around container mx-auto gap-12 lg:mt-20 mt-4 p-2'>
            {/* left side content */}
            <div className='space-y-5'>
                {/* Badge */}
                <div className='flex items-center gap-3 bg-violet-100 rounded-full px-4 py-2.5 w-fit'>
                    <span className='relative flex size-3'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75'></span>
                        <span className='relative inline-flex size-3 rounded-full bg-violet-600'></span>
                    </span>
                    <p className='text-violet-600 font-medium text-md'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-4xl lg:text-7xl font-extrabold'>Supercharge Your<br />Digital Workflow</h1>
                <p className='lg:text-lg text-black/60'>Access premium AI tools, design assets, templates, and productivity software <br className='hidden lg:block' />all in one place. Start creating faster today.</p>
                <div className='flex items-center lg:gap-4 gap-3'>
                    <button className='bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200'>
                        Explore Products
                    </button>
                    <button className='flex items-center gap-2 border-2 border-violet-600 text-violet-600 font-semibold py-3 px-6 rounded-full hover:bg-violet-50 transition-colors duration-200'>
                        <Play size={16} fill='currentColor' />
                        Watch Demo
                    </button>
                </div>
            </div>
            {/* right side content */}
            <div className='animate-pulse'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;