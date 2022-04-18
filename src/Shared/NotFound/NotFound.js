import React from 'react';
const NotFound = () => {
    return (
        <div className='mt-12 text-center h-[80vh] flex justify-center items-center'>
            <div>
                <h1 className='text-9xl font-bold text-red-500'>404</h1>
                <p className='text-3xl font-bold my-5'> Not Found</p>
                <p className='text-sm'>The resource requested could not be found on this server!</p>
            </div>
        </div>
    );
};

export default NotFound;