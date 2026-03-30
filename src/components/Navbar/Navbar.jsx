import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar shadow-sm items-center lg:px-25 py-2'>
            <div className='navbar-start'>
                <h2 className='text-4xl font-bold bg-linear-to-br from-violet-800 to-violet-500 bg-clip-text text-transparent py-2'>DigiTools</h2>
            </div>
            <div className='navbar-center'>
                <ul className='flex items-center gap-7 text-black/80'>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">Testimonials</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                </ul>
            </div>
            <div className='navbar-end flex items-center gap-5'>
                <ShoppingCart />
                <p className='font-medium'>Login</p>
                <button className='bg-linear-to-r from-violet-800 to-violet-500 text-white font-medium py-3 px-5 rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;