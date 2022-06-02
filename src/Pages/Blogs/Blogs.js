import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/server/main/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    if (blogs.length === 0) {
        return <Loading />
    }
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-4xl font-mono font-bold text-black mt-5'>Home Flavor Blogs</h1>
                <div className='grid grid-cols-3 mx-10 gap-10 mt-10'>
                    {
                        blogs.map(blog => <SingleBlog key={blogs._id} blog={blog} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;