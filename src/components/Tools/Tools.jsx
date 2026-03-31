import { Check } from 'lucide-react';
import React, { use } from 'react';

const tagStyles = {
    'best-seller': 'bg-yellow-100 text-yellow-600',
    'popular': 'bg-purple-100 text-purple-600',
    'new': 'bg-green-100 text-green-600',
};

const periodLabel = {
    'monthly': '/Mo',
    'one-time': '/One-Time',
};

const Tools = ({ toolsPromise }) => {

    const tools = use(toolsPromise);

    return (
        <div className='mt-25 container mx-auto px-6 lg:px-0'>
            {/* Header */}
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm text-black/60'>
                    Choose from our curated collection of premium digital products designed
                    <br className='hidden lg:block' />
                    to boost your productivity and creativity.
                </p>
            </div>
            {/* Grid cards for tools */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {tools.map(tool => (
                    <div key={tool.id} className='border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 relative shadow-sm'>

                        <div className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[tool.tagType]}`}>
                            {tool.tag}
                        </div>

                        <div className='p-3 border border-gray-200 rounded-full w-fit'>
                            <img src={tool.icon} alt={tool.name} />
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-xl font-bold'>{tool.name}</h3>
                            <p className='text-sm text-black/60'>{tool.description}</p>
                        </div>

                        <div>
                            <span className='text-3xl font-bold'>${tool.price}</span>
                            <span className='text-sm text-black/60'>{periodLabel[tool.period]}</span>
                        </div>

                        <ul className='space-y-2'>
                            {tool.features.map((feature, index) => (
                                <li key={index} className='flex items-center gap-2 text-sm'>
                                    <Check size={16} className='text-green-600' />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className='w-full bg-violet-600 hover:brightness-90 transition-all duration-200 cursor-pointer text-white font-semibold py-3 rounded-full mt-auto'>
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;