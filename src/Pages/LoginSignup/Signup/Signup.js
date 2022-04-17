import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Signup = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/login')
    }
    return (
        <div className='flex mt-7 justify-center'>

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-lg border-[1.5px] rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <p className="block text-gray-700 text-2xl font-bold mb-3"> Creat Account </p>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="COnfirm Password" />
                    </div>
                    <div className="mb-2">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                    </div>

                    <div className='flex mb-1 justify-center items-center'>
                        <div className='h-[1px] w-full bg-gray-500'>

                        </div>
                        <p className='text-sm mx-2 text-gray-500'>or</p>
                        <div className='h-[1px] w-full bg-gray-500'>

                        </div>
                    </div>

                    <SocialLogin />

                    <p className="mt-3 align-baseline font-bold text-sm text-gray-500">
                        Already have an account? <span className=' cursor-pointer text-orange-500' onClick={handleNavigate}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;