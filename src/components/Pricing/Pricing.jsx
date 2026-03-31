import { Check } from 'lucide-react';
import React from 'react';

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for getting started',
        price: 0,
        buttonText: 'Get Started Free',
        popular: false,
        features: [
            'Access to 10 free tools',
            'Basic templates',
            'Community support',
            '1 project per month',
        ],
    },
    {
        name: 'Pro',
        description: 'Best for professionals',
        price: 29,
        buttonText: 'Start Pro Trial',
        popular: true,
        features: [
            'Access to all premium tools',
            'Unlimited templates',
            'Priority support',
            'Unlimited projects',
            'Cloud sync',
            'Advanced analytics',
        ],
    },
    {
        name: 'Enterprise',
        description: 'For teams and businesses',
        price: 99,
        buttonText: 'Contact Sales',
        popular: false,
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantee',
            'Custom branding',
        ],
    },
];

const Pricing = () => {
    return (
        <section className='py-20 container mx-auto px-6 lg:px-0'>
            <div className='text-center space-y-3 mb-12'>
                <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-sm text-black/50'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch'>
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`rounded-2xl p-8 flex flex-col gap-6 relative ${plan.popular
                            ? 'bg-linear-to-b from-violet-600 to-violet-900 text-white'
                            : 'border border-gray-200 text-black'
                            }`}
                    >
                        {plan.popular && (
                            <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-700 text-xs font-semibold px-4 py-1.5 rounded-full'>
                                Most Popular
                            </div>
                        )}
                        <div>
                            <h3 className='text-2xl font-bold'>{plan.name}</h3>
                            <p className={`text-sm mt-1 ${plan.popular ? 'text-white/70' : 'text-black/50'}`}>
                                {plan.description}
                            </p>
                        </div>
                        <div>
                            <span className='text-5xl font-bold'>${plan.price}</span>
                            <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-black/50'}`}>/Month</span>
                        </div>
                        <ul className='space-y-3 flex-1'>
                            {plan.features.map((feature, index) => (
                                <li key={index} className='flex items-center gap-2 text-sm'>
                                    <Check size={16} className='text-green-500' />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-3 rounded-full font-medium transition-all duration-200 cursor-pointer ${plan.popular
                                ? 'bg-white text-violet-600 hover:bg-gray-100 font-semibold'
                                : 'bg-violet-600 text-white hover:brightness-90'
                                }`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;