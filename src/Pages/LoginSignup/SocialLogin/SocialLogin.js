import React from 'react';
import Google from '../../../images/Logo/Google.png'
import GitHub from '../../../images/Logo/GitHub.png'
import Facebook from '../../../images/Logo/Facebook.png'

const SocialLogin = () => {
    return (
        <div className='flex justify-around items-center'>
            <img className='rounded-full w-[40px]' src={Google} alt="" />
            <img className='rounded-full w-[40px]' src={GitHub} alt="" />
            <img className='rounded-full w-[40px]' src={Facebook} alt="" />
        </div>
    );
};

export default SocialLogin;