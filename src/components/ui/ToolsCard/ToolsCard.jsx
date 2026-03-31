import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ToolsCard = ({ tool, tagStyles, periodLabel, onAddToCart }) => {

    const [isPurchased, setIsPurchased] = useState(false);

    const handlePurchasing = () => {
        setIsPurchased(true);
        onAddToCart(tool);
    }

    return (
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

            <button
                onClick={handlePurchasing}
                className={`w-full transition-all duration-200 cursor-pointer text-white font-semibold py-3 rounded-full mt-auto flex items-center justify-center gap-2 ${isPurchased ? 'bg-green-500' : 'bg-violet-600 hover:brightness-90'}`}>
                {isPurchased ? (
                    <>
                        <Check size={16} />
                        Added to Cart
                    </>
                ) : (
                    'Buy Now'
                )}
            </button>
        </div>
    );
};

export default ToolsCard;