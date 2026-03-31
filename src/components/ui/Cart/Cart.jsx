import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ cartItems, onRemove, onClearCart }) => {

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='mt-10 mb-5 lg:mb-8 border border-gray-200 rounded-2xl p-6 shadow-sm'>
            <h2 className='text-xl font-bold mb-4'>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-16 gap-4'>
                    <ShoppingCart size={64} className='text-gray-300' />
                    <h3 className='text-xl font-bold text-black/60'>Your Cart is Empty!</h3>
                    <p className='text-sm text-black/40'>Looks like you haven't added anything yet. Go explore our premium tools!</p>
                </div>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className='flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-4 mb-4'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-white p-3 rounded-full border border-gray-200 w-fit'>
                                    <img src={item.icon} alt={item.name} />
                                </div>
                                <div>
                                    <h3 className='font-bold text-sm lg:text-lg'>{item.name}</h3>
                                    <p className='text-sm text-black/60'>${item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => onRemove(item.id)}
                                className='text-red-500 font-semibold text-sm hover:text-red-700 cursor-pointer'>
                                Remove
                            </button>

                        </div>
                    ))}

                    {/* Total price */}
                    <div className='flex items-center justify-between mt-4'>
                        <p className='text-black/50 font-medium'>Total:</p>
                        <p className='text-2xl font-bold'>${total}</p>
                    </div>

                    {/* Checkout button */}
                    <button onClick={onClearCart} className='w-full bg-linear-to-r from-violet-800 to-violet-500 text-white font-semibold py-4 rounded-full mt-6 hover:brightness-90 cursor-pointer'>
                        Proceed To Checkout
                    </button>
                </div>
            )}

        </div>
    );
};

export default Cart;