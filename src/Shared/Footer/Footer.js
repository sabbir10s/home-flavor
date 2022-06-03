import React from 'react';
import logo from '../../images/Logo/white logo.png'
import { BsFacebook } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className=' bg-[rgb(40,39,39)]' >
            <div className='lg:mx-10 grid gap-5 lg:grid-cols-3'>
                <div className=" lg:col-span-2 text-white mx-auto px-5 pt-5">
                    <div className='grid grid-cols-2 gap-32 justify-items-center items-center'>
                        <div> <img className='w-[180px]' src={logo} alt="" /></div>
                        <div className="flex gap-5 text-3xl">
                            <a href='https://www.facebook.com/'><BsFacebook /></a>
                            <a href='https://youtube.com/'><IoLogoYoutube /></a>
                            <a href='https://twitter.com/'><AiFillTwitterCircle /></a>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p>Food Service Or Catering Industry Defines Those Businesses, Institutions, And
                            Companies Responsible For Any Meal Prepared Outside The Home.</p>
                    </div>
                    <div className=" my-5 border border-white"></div>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        <div className='flex items-center gap-5'>
                            <div>
                                <ImLocation2 />
                            </div>
                            <div className='text-sm'>
                                <p>157 White Oak Drive Kansas City</p>
                                <p>689 Lynn Street South Boston</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <BsTelephoneFill />
                            </div>
                            <div className='text-sm'>
                                <p>(617)-276-8031</p>
                                <p>(617)-276-8031</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <MdEmail />
                            </div>
                            <div className='text-sm'>
                                <p>admin@fooday.com</p>
                                <p>support@fooday.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-white col-span-1 bg-[#77af17] flex flex-col my-7 mx-auto items-center p-5'>
                    <div className='border border-white p-8'>
                        <p className='font-mono font-bold text-2xl mb-5'>Open Hour</p>
                        <div className='text-sm font-md'>
                            <p>  </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tuesday </td>
                                        <td>.........................................</td>
                                        <td>7AM - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday </td>
                                        <td>.........................................</td>
                                        <td>7AM - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday </td>
                                        <td>.........................................</td>
                                        <td>7AM - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday:</td>
                                        <td>.........................................</td>
                                        <td>7AM - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday </td>
                                        <td>.........................................</td>
                                        <td>7AM - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday </td>
                                        <td>.........................................</td>
                                        <td>7AM - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Monday </td>
                                        <td>.........................................</td>
                                        <td>Close</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;