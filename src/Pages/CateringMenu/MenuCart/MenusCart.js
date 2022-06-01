import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCart.css'
const MenusCart = ({ menu }) => {
    const { id, img, name, price, rating } = menu;
    const navigate = useNavigate();

    const handelMenuDetails = id => {
        navigate(`/menudetails/${id}`);
    }

    return (
        <div className='cart border-1 rounded-md shadow-md hover:shadow-xl'>
            <div>
                <div className=' bg-slate-200 rounded-md py-[15px]'>
                    <img className='mx-auto max-w-[200px]' src={img} alt="" />
                </div>
                <div className='text-center my-5'>
                    <p className='text-3xl font-bold text-yellow-500'>{name}</p>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}/-Tk</p>
                </div>
            </div>
            <div className='cart-button hidden rounded-md'>
                <button onClick={() => handelMenuDetails(id)} className=' bg-yellow-500  rounded-full py-2 px-7 font-bold'>Order Now</button>
            </div>
        </div>
    );
};

export default MenusCart;