import React from 'react';
import heroImg from '../../../images/hero2.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner '>
            <div className='gird columns-2 container mx-auto'>
                <div className='flex justify-center items-center h-[82vh]'>
                    <div>
                        <h1 className='text-5xl leading-normal font-bold mb-5'>I believe good food offer great smile</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates repudiandae dolorem architecto cupiditate perferendis nemo facilis provident amet totam consectetur harum maiores beatae nihil neque, culpa sequi vel quasi.</p>
                        <button className='bg-yellow-400 px-5 py-2 rounded-full font-medium hover:shadow-md mt-3'>Book Now</button>
                    </div>
                </div>
                <div>
                    <img className='w-[500px]' src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;