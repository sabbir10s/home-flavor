import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-2xl mb-1 font-bold'> Difference between authorization and authentication</h1>

            <div>
                <table class="w-full border border-black">
                    <thead>
                        <tr className='border border-black'>
                            <th className='border border-black'>Authorization</th>
                            <th className='border border-black'>Authentication</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border border-black'>
                            <td className='border border-black'>Authorization determines what resources a user can access</td>
                            <td className='border border-black'>Authentication verifies who the user is.</td>
                        </tr>
                        <tr className='border border-black'>

                            <td className='border border-black'> Authorization always takes place after authentication</td>
                            <td className='border border-black'>Authentication is the first step of a good identity and access management process.</td>

                        </tr>
                        <tr className='border border-black'>
                            <td className='border border-black'>Authorization isn’t visible to or changeable by the user.</td>
                            <td className='border border-black'>Authentication is visible to and partially changeable by the user.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h1 className='text-2xl mt-10 font-bold'>Why are you using firebase? <br /> What other options do you have to implement authentication?</h1>
            <p>I can use Firebase Authentication to allow users to sign in to my app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.Firebase provides me fast and secure hosting for my web app, static and dynamic content, and microservices.For this reason i use firebase.</p>
            <p>
                There many option to implement authentication, Parse, Back4App, AWS Amplify, Kuzzle etc.
            </p>

            <h1 className='text-2xl mt-10 font-bold'>What other services does firebase provide other than authentication?</h1>
            <ul className='list-disc mx-5 mt-2'>
                <li>Cloud Firestore.</li>
                <li>Cloud Functions.</li>
                <li>Authentication.</li>
                <li>Hosting.</li>
                <li>Cloud Storage.</li>
                <li>Google Analytics.</li>
                <li>Predictions.</li>
                <li>Cloud Messaging.</li>
            </ul>
        </div>
    );
};

export default Blogs;