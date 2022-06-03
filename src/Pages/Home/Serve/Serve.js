import React from 'react';
import { GiChefToque } from 'react-icons/gi';
import food from '../../../images/food.png'
import delivery from '../../../images/delivery.png'
import './Serve.css'

const Serve = () => {
    return (
        <div className='mx-5 lg:mx-10 my-14'>
            <h2 className='text-center text-lg text-[#77af17] uppercase font-bold'>OUR SERVICE</h2>
            <h1 className='text-center text-4xl text-black font-mono font-bold mb-3'>Why Choose Us</h1>
            <p className='text-center text-gray-500 leading-relaxed'>Food Service Or Catering Industry Defines Those Businesses, Institutions, And <br /> Companies Responsible For Any Meal Prepared Outside The Home.</p>
            <div className='my-16'>
                <div className='grid lg:grid-cols-3  gap-14'>
                    <div className='px-8 py-16 rounded-lg shadow-lg'>
                        <img className='mx-auto mb-1 ' src={delivery} alt="" />
                        <p className='text-black text-2xl font-mono mb-5 font-medium text-center'>Fast Delivery</p>
                        <p className='text-center text-gray-500'>Get Fast Food delivery, fast. Easy online ordering for takeout and delivery from Fast Food restaurants near you.</p>
                    </div>
                    <div className='px-8 py-16 rounded-lg shadow-lg chef'>
                        <span className='text-[#f7ca3e] mt-4 text-8xl flex justify-center'><GiChefToque /></span>
                        <p className='text-black text-2xl font-mono mb-5 font-medium text-center'>Best Chef</p>
                        <p className='text-center text-gray-500'>My chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation</p>

                    </div>
                    <div className='chef-cart rounded-lg hidden lg:block'></div>

                    <div className='px-8 py-16 rounded-lg shadow-lg'>
                        <img className='mx-auto mb-1 ' src={food} alt="" />
                        <p className='text-black text-2xl font-mono mb-5 font-medium text-center'>Fresh Food</p>
                        <p className='text-center text-gray-500'>Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits.</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Serve;