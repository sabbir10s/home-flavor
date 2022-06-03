import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg-slate-100 h-screen flex justify-center items-center'>

            <div className="w-full max-w-md mt-[-30px]">
                <form className="bg-white shadow-lg border-[1.5px] rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <p className="block text-gray-700 text-2xl font-bold mb-3">Please Give Your Information </p>
                        <input className="border-[#f7ca3e] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                    </div>
                    <div className="mb-4">
                        <input className="border-[#f7ca3e] appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="email" value={user?.email} type="email" placeholder="Your email" />
                    </div>
                    <div className="mb-4">
                        <textarea rows="4" cols="50" className="border-[#f7ca3e] appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="address" type="textarea" placeholder="Address" />
                    </div>
                    <div className="mb-4">
                        <input className="border-[#f7ca3e] appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone Number" />
                    </div>
                    <div className="mb-2">
                        <button className="bg-[#f7ca3e] hover:bg-yellow-500 text-black font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Checkout
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Checkout;