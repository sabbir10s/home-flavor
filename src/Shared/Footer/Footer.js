import React from 'react';
import logo from '../../images/Logo/white logo.png'
const Footer = () => {
    return (
        <div className='bg-black py-5 '>
            <div className='container mx-auto'>
                <img className='w-[180px] mb-2' src={logo} alt="" />
                <div className='text-sm text-white'>
                    <p>+1 888.387.5000</p>
                    <p> +1 888.387.5000</p>
                    <p>info@homeflavor.com</p>
                    <p>Materfront avenue, street 2005F, Dhaka</p>
                </div>
                <div className='h-[1px] my-3 bg-white w-full'></div>
                <p className='text-center text-white py-2'> © 2020 Home Flavor! All Rights Reserved By VoidCoders</p>
            </div>
        </div>
    );
};

export default Footer;