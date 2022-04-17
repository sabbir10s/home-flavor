import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenusCart = ({ menu }) => {
    const { id, img, name, price, rating } = menu;
    const navigate = useNavigate();

    const handelMenuDetails = id => {
        navigate(`/menudetails/${id}`);
    }

    return (
        <div className='text-center border-1 rounded-lg p-5 shadow-lg hover:shadow-2xl'>
            <img className='mx-auto w-[300px]' src={img} alt="" />
            <p className='text-3xl font-bold text-yellow-500'>{name}</p>
            <p>Price: {price}/-Tk</p>
            <p>Rating: {rating}</p>
            <button onClick={() => handelMenuDetails(id)} className='bg-yellow-500  rounded-full py-2 px-7 font-bold mt-3'>Full Details</button>
        </div>
    );
};

export default MenusCart;