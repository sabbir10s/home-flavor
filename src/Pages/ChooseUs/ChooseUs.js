import React from 'react';
import chef from '../../images/chef.png'
import delivery from '../../images/delivery.png'
import food from '../../images/food.png'

const ChooseUs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl lg:text-4xl text-black font-bold mt-12 mb-5 font-mono'>Why Choose Me</h1>
            <p className='text-center text-gray-500 leading-relaxed'>Food Service Or Catering Industry Defines Those Businesses, Institutions, And <br /> Companies Responsible For Any Meal Prepared Outside The Home.</p>

            <div className='my-10 lg:flex lg:justify-center gap-12'>
                <div className='text-center p-5 w-[320px] hover:shadow-xl'>
                    <img className='mx-auto ' src={chef} alt="" />
                    <h1 className='font-bold text-2xl my-4'>Best Chef</h1>
                    <p className='text-gray-500 text-sm'>My chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation</p>
                </div>
                <div className='text-center p-5 w-[320px] hover:shadow-xl'>
                    <img className='mx-auto ' src={food} alt="" />
                    <h1 className='font-bold text-2xl my-4'>Fresh Food</h1>
                    <p className='text-gray-500 text-sm'>Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits.</p>
                </div>
                <div className='text-center p-5 w-[320px] hover:shadow-xl'>
                    <img className='mx-auto ' src={delivery} alt="" />
                    <h1 className='font-bold text-2xl my-4'>Best Chef</h1>
                    <p className='text-gray-500 text-sm'>Get Fast Food delivery, fast. Easy online ordering for takeout and delivery from Fast Food restaurants near you.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;