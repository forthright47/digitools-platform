import React from 'react';

const Stats = () => {
    return (
        <div className='flex justify-center px-50 py-10 bg-linear-to-br from-violet-800 to-violet-500 text-white mt-18 divide-x divide-white/30'>
            <div className='flex-1 px-20 text-center'>
                <h1 className='text-5xl font-bold'>50K+</h1>
                <p className='text-white/70 mt-2'>Active Users</p>
            </div>
            <div className='flex-1 px-20 text-center'>
                <h1 className='text-5xl font-bold'>200+</h1>
                <p className='text-white/70 mt-2'>Premium Tools</p>
            </div>
            <div className='flex-1 px-20 text-center'>
                <h1 className='text-5xl font-bold'>4.9</h1>
                <p className='text-white/70 mt-2'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;