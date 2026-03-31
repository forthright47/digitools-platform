import { User, Package, Rocket } from 'lucide-react';
import React from 'react';

const steps = [
    {
        id: '01',
        icon: <User size={32} className='text-violet-600' />,
        title: 'Create Account',
        description: 'Sign up for free in seconds. No credit card required to get started.',
    },
    {
        id: '02',
        icon: <Package size={32} className='text-violet-600' />,
        title: 'Choose Products',
        description: 'Browse our catalog and select the tools that fit your needs.',
    },
    {
        id: '03',
        icon: <Rocket size={32} className='text-violet-600' />,
        title: 'Start Creating',
        description: 'Download and start using your premium tools immediately.',
    },
];

const Steps = () => {
    return (
        <div className='bg-gray-50 py-20 mt-20'>
            <div className='text-center space-y-3 mb-12'>
                <h2 className='text-4xl font-bold'>Get Started In 3 Steps</h2>
                <p className='text-sm text-black/50'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6 lg:px-0'>
                {steps.map((step) => (
                    <div key={step.id} className='bg-white rounded-2xl p-10 flex flex-col items-center text-center gap-5 relative shadow-sm'>

                        <div className='absolute top-4 right-4 bg-linear-to-tr from-violet-700 to-violet-500 text-white text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center'>
                            {step.id}
                        </div>
                        <div className='bg-violet-100 p-6 rounded-full'>
                            {step.icon}
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-xl font-bold'>{step.title}</h3>
                            <p className='text-sm text-black/50'>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;