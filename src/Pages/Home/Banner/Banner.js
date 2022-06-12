import React from 'react';
import chef from '../../../images/person.png'
import PrimaryButton from '../../../Shared/Button/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner '>
            <div className=' grid md:grid-cols-2 mt-3 md:my-7 lg:mx-10 mx-4'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h3 className='text-black leading-normal lg:leading-[90px] lg:text-7xl md:text-5xl text-4xl mb-3 font-bold font-mono'>We believe good food offer great smile</h3>
                        <p className='text-gray-500 mb-3'>Are you planning? - a gorgeous wedding, a corporate event, an office lunch or anything - We will create an amazingly delicious food experience suited to your taste.</p>
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