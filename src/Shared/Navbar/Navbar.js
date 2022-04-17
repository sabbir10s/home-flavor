import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/logo.png'


const Navbar = () => {

    return (
        <div className='flex justify-between items-center  px-10 py-7 shadow-lg'>
            <div>
                <Link to="/home">
                    <img className='w-[160px]' src={logo} alt="" />
                </Link>
            </div>

            <div className='flex gap-10'>
                <Link className='hover:text-orange-500' to='/login'>Login</Link>
                <Link className='hover:text-orange-500' to='/signup'>Sign Out</Link>
            </div>
        </div>
    );
};

export default Navbar;