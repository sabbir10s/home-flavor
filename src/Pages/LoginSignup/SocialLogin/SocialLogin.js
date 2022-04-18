import React from 'react';
import Google from '../../../images/Logo/Google.png'
import GitHub from '../../../images/Logo/GitHub.png'
import Facebook from '../../../images/Logo/Facebook.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    if (error) {
        console.log(error);
    }
    if (user || gitUser || fbUser) {
        navigate(from, { replace: true })
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }
    const handleGitHubSignIn = () => {
        signInWithGithub()
    }
    const handleFbSignIn = () => {
        signInWithFacebook()
    }

    return (
        <div className='flex justify-around items-center'>
            <img onClick={handleSignInWithGoogle} className='rounded-full w-[40px] cursor-pointer' src={Google} alt="" />
            <img onClick={handleGitHubSignIn} className='rounded-full w-[40px] cursor-pointer' src={GitHub} alt="" />
            <img onClick={handleFbSignIn} className='rounded-full w-[40px] cursor-pointer' src={Facebook} alt="" />
        </div>
    );
};

export default SocialLogin;