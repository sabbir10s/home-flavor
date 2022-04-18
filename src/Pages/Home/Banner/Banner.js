import React from 'react';
import chef from '../../../images/person.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner '>
            <div className='gird columns-2 container mx-auto  h-[100vh]'>
                <div className='flex justify-center items-center h-[600px]'>
                    <div>
                        <h1 className='text-5xl leading-normal font-bold mb-5'>I believe good food offer great smile</h1>
                        <p>'Home Flavor' is a neighborhood home food catering service, serving seasonal global cuisine driven by the faire.</p>
                        <button className='bg-yellow-400 px-5 py-2 rounded-full font-medium hover:shadow-md mt-3'>Order Now</button>
                    </div>
                </div>
                <div>
                    <img className='w-[800px]' src={chef} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;