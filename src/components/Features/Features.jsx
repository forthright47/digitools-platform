import React from 'react';

const Features = () => {
    return (
        <div className='bg-linear-to-r from-violet-700 to-violet-600 py-20 text-white text-center'>
            <h2 className='text-4xl font-bold mb-4'>Ready To Transform Your Workflow?</h2>
            <p className='text-white/70 text-sm mb-8'>
                Join thousands of professionals who are already using Digitools to work smarter. <br />
                Start your free trial today.
            </p>
            <div className='flex items-center justify-center gap-4 mb-6'>
                <button className='bg-white text-violet-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer'>
                    Explore Products
                </button>
                <button className='border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer'>
                    View Pricing
                </button>
            </div>
            <p className='text-white/60 text-sm'>
                14-day free trial • No credit card required • Cancel anytime
            </p>
        </div>
    );
};

export default Features;