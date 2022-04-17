import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/logo.png'


const Navbar = () => {

    return (
        <div className='flex justify-between items-center  px-10 py-7 mb-5 shadow-lg'>
            <div>
                <Link to="/home">
                    <img className='w-[160px]' src={logo} alt="" />
                </Link>
            </div>

            <div className='flex gap-10'>
                <Link className='hover:text-orange-500' to='/login'>LOGIN</Link>
                <Link className='hover:text-orange-500' to='/signup'>SIGN UP</Link>
                <Link className='hover:text-orange-500' to='/cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;