import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/logo.png'


const Navbar = () => {

    return (
        <div className='flex justify-between items-center  px-10 py-7 mb-5 shadow-lg'>
            <div>
                <img className='w-[150px]' src={logo} alt="" />
            </div>

            <div className='flex gap-10'>
                <Link to='/login'>LOGIN</Link>
                <Link to='/signup'>SIGNUP</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Navbar;