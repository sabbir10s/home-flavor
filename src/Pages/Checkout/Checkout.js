import React from 'react';

const Checkout = () => {
    return (
        <div className='flex mt-7 justify-center'>

            <div className="w-full max-w-md">
                <form className="bg-white shadow-lg border-[1.5px] rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <p className="block text-gray-700 text-2xl font-bold mb-3">Please Give Your Information </p>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="mb-4">
                        <textarea rows="4" cols="50" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="address" type="textarea" placeholder="Address" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone Number" />
                    </div>
                    <div className="mb-2">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Checkout
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Checkout;