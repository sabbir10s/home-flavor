import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo/logo.png'
import CustomLink from '../CustomLink/CustomLink';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className='lg:mx-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="block mr-5 lg:mr-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/Blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img className='w-[180px]' src={logo} alt="Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal p-0 gap-8">
                        <CustomLink to='/home'><span className='px-2 hover:border-b-4 pb-2 hover:font-bold border-[#f7ca3e]'>Home</span></CustomLink>
                        <CustomLink to='/about'><span className='px-2 hover:border-b-4 pb-2 hover:font-bold border-[#f7ca3e]'>About</span></CustomLink>
                        <CustomLink to='/Blogs'><span className='px-2 hover:border-b-4 pb-2 hover:font-bold border-[#f7ca3e]'>Blogs</span></CustomLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex gap-5 items-center'>
                                <p className='hidden md:block'>{user.displayName}</p>
                                <p className='bg-[#f7ca3e] text-md font-medium px-2 py-1 rounded-lg hover:shadow-lg cursor-pointer' onClick={handleSignOut}>SignOut</p>
                            </div>
                            :
                            <p className='flex gap-10'>
                                <CustomLink to='/login'> <span className='px-2 hover:border-b-4 pb-2 hover:font-bold border-[#f7ca3e]'>Login</span> </CustomLink>
                            </p>
                    }
                </div>
            </div>
        </nav >
    );
};

export default Navbar;