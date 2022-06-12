import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../Shared/Loading/Loading';

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
        console.log(error);
        errorElement = <p className='text-red-500'>{error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return <Loading />
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
        toast('Sent email');
    }

    return (
        <div className='flex py-20 bg-slate-100 justify-center'>

            <div className="w-full max-w-sm">
                <form onSubmit={handleLogin} className="bg-white shadow-lg border-[1.5px] rounded px-8 pt-6 pb-8 mb-4">

                    <p className=" block text-gray-700 text-xl font-bold mb-4"> Please Login</p>

                    <div className="mb-4">
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" onBlur={handleEmailBlur} name='email' type="email" placeholder="Your email" required />
                    </div>
                    <div className="mb-4">
                        <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" name='password' type="password" placeholder="Password" />
                    </div>
                    {errorElement}
                    <div className="mb-2">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>{
                            error && <p className="mt-3 align-baseline text-sm text-gray-500">
                                Forget your password?   <button className=' cursor-pointer text-orange-500' type="submit" onClick={resetPassword}>Reset here</button>
                            </p>
                        }


                    </div>

                    <div className='flex my-5 justify-center items-center'>
                        <div className='h-[1px] w-full bg-gray-500'>

                        </div>
                        <p className='text-sm mx-2 text-gray-500'>or</p>
                        <div className='h-[1px] w-full bg-gray-500'>

                        </div>
                    </div>
                    <SocialLogin />
                    <p className="mt-5 align-baseline text-sm text-gray-500">
                        New in home flavor? <span className=' cursor-pointer text-orange-500' onClick={handleNavigate}>Sign Up</span>
                    </p>



                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;