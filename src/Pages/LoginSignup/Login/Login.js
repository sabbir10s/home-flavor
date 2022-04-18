import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/signup')
    }
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    const [email, setEmail] = useState('');

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500'>{error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(email);
    }
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='flex mt-7 justify-center'>

            <div className="w-full max-w-xs">
                <form onSubmit={handleLogin} className="bg-white shadow-lg border-[1.5px] rounded px-8 pt-6 pb-8 mb-4">

                    <p className=" block text-)gray-700 text-2xl font-bold mb-4"> Please Login</p>

                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" onBlur={handleEmailBlur} name='email' type="email" placeholder="Your email" required />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="Password" />
                    </div>
                    {errorElement}
                    <div className="mb-2">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
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
                        New in home flavor? <span className=' cursor-pointer text-orange-500' onClick={handleNavigate}>Please Sign Up</span>
                    </p>
                    <p className="mt-3 align-baseline font-bold text-sm text-gray-500">
                        Forget your password?
                    </p>
                    <button className=' cursor-pointer text-orange-500' type="submit" onSubmit={resetPassword}>Reset here</button>

                </form>
            </div>
        </div>
    );
};

export default Login;