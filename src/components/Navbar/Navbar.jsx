import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar sticky top-0 z-100 bg-white shadow-sm items-center lg:px-25 py-3'>
            <div className='navbar-start'>
                <h2 className='lg:text-4xl text-3xl font-bold bg-linear-to-br from-violet-800 to-violet-500 bg-clip-text text-transparent py-2'>DigiTools</h2>
            </div>
            <div className='navbar-center hidden lg:flex'>
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
                <ShoppingCart className='hidden lg:flex'/>
                <p className='font-medium hidden lg:flex'>Login</p>
                <button className='bg-linear-to-r from-violet-800 to-violet-500 text-white lg:font-semibold font-medium lg:py-3 lg:px-5 p-2.5 rounded-full lg:text-lg text-sm hover:opacity-90 transition-opacity duration-200'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;