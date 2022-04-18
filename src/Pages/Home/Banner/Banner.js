import React from 'react';
import chef from '../../../images/person.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className=''>
            <div className=' lg:grid lg:grid-cols-2 flex flex-col-reverse justify-center items-center  mx-10  h-[100vh]'>
                <div className='flex justify-center items-center'>
                    <div className='mt-10 lg:mt-0'>
                        <h1 className='text-3xl lg:text-5xl lg:leading-normal font-bold lg:mb-5'>I believe good food offer great smile</h1>
                        <p>'Home Flavor' is a neighborhood home food catering service, serving seasonal global cuisine driven by the faire.</p>

                    </div>
                </div>
                <div>
                    <img className='w-full lg:mt-0' src={chef} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;