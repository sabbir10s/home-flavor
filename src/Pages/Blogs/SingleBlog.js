import React from 'react';

const SingleBlog = ({ blog }) => {
    const { postBy, title, date, details, img } = blog;
    return (
        <div className='p-5 border shadow-md rounded-lg'>
            <img className='rounded-lg' src={img} alt="" />

            <div className='flex justify-between text-[#77af17] my-5'>
                <p>{postBy}</p>
                <p>{date}</p>
            </div>
            <h1 className='text-xl font-bold font-mono my-5'>{title}</h1>
            <div><p className='text-sm text-gray-500'>{details.slice(0, 150)}</p> <button className='text-[#77af17]'>Read More....</button></div>
        </div>
    );
};

export default SingleBlog;