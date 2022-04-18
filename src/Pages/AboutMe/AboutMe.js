import React from 'react';
import profile from '../../images/profilePic.jpg'
const AboutMe = () => {
    return (
        <div className='container mx-auto mt-8 h-[82vh]'>

            <div className='flex gap-5'>

                <div>

                    <h1 className='text-5xl font-bold leading-relaxed	'>
                        Hi,<br />
                        I'am <span className='text-yellow-400'>Sabbir Ahmed</span> <br />
                        Web Development (learner) </h1>

                    <p className='mt-3'>
                       To become a web developer i start Programming Hero Web Development course. I already learn lot's of things.I alway try to heard to complete my task. Next 2-3 months my goal is complete this course sincerely and become a expert junior web developer. 
                    </p>
                </div>
                <img className='w-[350px] rounded-full shadow-lg' src={profile} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;