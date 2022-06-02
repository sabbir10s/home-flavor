import React from 'react';
import sideImg from '../../images/about-1.png'
import sideImg2 from '../../images/hero1.png'
import Footer from '../../Shared/Footer/Footer';
const About = () => {
    return (
        <>
            <div className=''>

                <div className='grid grid-cols-5 justify-items-end items-center'>
                    <div className=' col-span-2'>
                        <img src={sideImg2} alt="" />
                    </div>
                    <div className='col-span-2 ml-4'>
                        <h1 className='text-4xl font-bold font-mono mb-4'>About Home Flavor</h1>
                        <p>
                            Home Flavor is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal. Some restaurants are a chain, meaning that there are restaurants which have the same name and serve and where people the same food. time and to eat a meal. Some restaurants are a chain, time and to eat a meal. Some restaurants are a chain.
                        </p>
                    </div>
                    <div className='col-span-1'>
                        <img src={sideImg} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;