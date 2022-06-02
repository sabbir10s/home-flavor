import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signup = () => {
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/login')
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    let errorElement;

    if (error) {
        errorElement = <p className='text-red-500'>{error?.message}</p>
    }
    if (user) {
        navigate('/home');
    }
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return setMessage('Password are not matching');
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='flex md:py-8 justify-center md:bg-slate-100'>

            <div className="w-full max-w-sm">
                <form onSubmit={handleSignUp} className="bg-white shadow-lg border-[1.5px] rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <p className="block text-gray-700 text-xl font-bold mb-3"> Creat Account </p>
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' type="text" placeholder="Username" required />
                    </div>
                    <div className="mb-4">
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='email' type="email" placeholder="Your email" required />
                    </div>
                    <div className="mb-4">
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="Password" required />
                    </div>
                    <div className="mb-4">
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name="confirmPassword" type="password" placeholder="COnfirm Password" required />
                    </div>
                    {errorElement}
                    <p className='text-red-500'>{message}</p>
                    <div className="mb-2">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </div>

                    <div className='flex my-5 justify-center items-center'>
                        <div className='h-[1px] w-full bg-gray-500'>

                        </div>
                        <p className='text-sm mx-2 text-gray-500'>or</p>
                        <div className='h-[1px] w-full bg-gray-500'>

                        </div>
                    </div>

                    <SocialLogin />

                    <p className="mt-3 align-baseline text-sm text-gray-500">
                        Already have an account? <span className=' cursor-pointer text-orange-500' onClick={handleNavigate}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;