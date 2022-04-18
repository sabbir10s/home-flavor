import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo/logo.png'


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='lg:flex lg:justify-between lg:items-center  px-10 py-7 shadow-lg'>
            <div>
                <Link to="/home">
                    <img className='mx-auto w-[160px]' src={logo} alt="" />
                </Link>
            </div>

            <div className='flex gap-10'>
            
            <Link to='/blogs' className='hover:text-yellow-500'> Blogs</Link>
            <Link to='/about' className='hover:text-yellow-500'> About Me</Link>
                {
                    user ?
                        <Link onClick={handleSignOut} className='hover:text-yellow-500' to='/login'>Sign Out</Link>
                        :
                        <Link className='hover:text-orange-500' to='/login'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;