import React from 'react';

const Stats = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center px-10 lg:px-40 py-6 bg-linear-to-br from-violet-800 to-violet-500 text-white mt-15'>
            <div className='flex-1 px-5 lg:px-20 text-center py-5 border-b lg:border-b-0 lg:border-r border-white/30'>
                <h1 className='text-4xl lg:text-5xl font-bold'>50K+</h1>
                <p className='text-white/70 mt-2'>Active Users</p>
            </div>
            <div className='flex-1 px-5 lg:px-20 text-center py-5 border-b lg:border-b-0 lg:border-r border-white/30'>
                <h1 className='text-4xl lg:text-5xl font-bold'>200+</h1>
                <p className='text-white/70 mt-2'>Premium Tools</p>
            </div>
            <div className='flex-1 px-5 lg:px-20 text-center py-5'>
                <h1 className='text-4xl lg:text-5xl font-bold'>4.9</h1>
                <p className='text-white/70 mt-2'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;