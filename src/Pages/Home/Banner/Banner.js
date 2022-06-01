import React from 'react';
import chef from '../../../images/person.png'
import PrimaryButton from '../../../Shared/Button/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className=' grid md:grid-cols-2 mt-5 md:my-7'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h3 className='text-black leading-normal lg:leading-[90px] lg:text-7xl md:text-5xl text-4xl mb-3 font-bold font-mono'>I believe good food offer great smile</h3>
                        <p className='text-gray-500 mb-3'>'Home Flavor' is a neighborhood home food catering service, serving seasonal global cuisine driven by the faire.</p>
                        <PrimaryButton>Book Now</PrimaryButton>

                    </div>
                </div>
                <div>
                    <img className='min-w-[300px] lg:mt-24' src={chef} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;