import React, { use, useState } from 'react';
import ToolsCard from '../ui/ToolsCard/ToolsCard';
import Cart from '../ui/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [activeTab, setActiveTab] = useState('products');
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (tool) => {
        const alreadyAdded = cartItems.find(item => item.id === tool.id);
        if (alreadyAdded) {
            toast.warn('Already added to Cart!');
            return;
        }
        setCartItems([...cartItems, tool]);
        toast.success('Added to Cart!');
    };

    const handleRemoveFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        toast.success('Removed from Cart!');
    };

    const handleClearCart = () => {
        setCartItems([]);
        toast.success('Purchased Successfully!');
    };

    return (
        <div className='mt-25 container mx-auto px-6 lg:px-0'>
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm text-black/60'>
                    Choose from our curated collection of premium digital products designed
                    <br className='hidden lg:block' />
                    to boost your productivity and creativity.
                </p>

                <div className='flex items-center justify-center bg-gray-100 rounded-full p-1 w-fit mx-auto mt-4'>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${activeTab === 'products'
                            ? 'bg-violet-600 text-white'
                            : 'text-black/60 hover:text-black'
                            }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${activeTab === 'cart'
                            ? 'bg-violet-600 text-white'
                            : 'text-black/60 hover:text-black'
                            }`}
                    >
                        Cart ({cartItems.length})
                    </button>
                </div>


            </div>
            {activeTab === 'products' ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {tools.map((tool, index) => (
                        <ToolsCard key={index} tool={tool} tagStyles={tagStyles} periodLabel={periodLabel} onAddToCart={handleAddToCart} isAdded={cartItems.some(item => item.id === tool.id)} />
                    ))}
                </div>
            ) : (
                <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} onClearCart={handleClearCart}/>
            )}

            <ToastContainer position='top-right' autoClose={2000} />
        </div>
    );
};

export default Tools;