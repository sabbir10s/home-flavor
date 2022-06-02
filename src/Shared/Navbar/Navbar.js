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
        <nav className='mx-10'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/Blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img className='w-[180px] ml-[-10px]' src={logo} alt="Logo" /></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/Blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    {
                        user ?
                            <div className='flex gap-5 items-center'>
                                <p className='hidden md:block'>{user.displayName}</p>
                                <p className='bg-[#f7ca3e] text-md font-medium px-2 py-1 rounded-lg hover:shadow-lg cursor-pointer' onClick={handleSignOut}>SignOut</p>
                            </div>
                            :
                            <p className='flex gap-5'>
                                <Link to='/login'>Login</Link>
                                <Link className='hidden md:block' to='/signup'>SignUp</Link>
                            </p>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;