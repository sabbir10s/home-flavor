import React from 'react';
import { Link } from 'react-router-dom';

const MenusCart = ({ menu }) => {
    const { img, name, price, rating, description } = menu;
    // const navigate = useNavigate();

    // const handelMenuDetails = id => {
    //     navigate(`/menudetails/${id}`);
    // }


    return (
        <div className='text-center border-1 rounded-lg p-5 shadow-lg hover:shadow-2xl'>
            <img className='mx-auto w-[200px]' src={img} alt="" />
            <div className='text-left'>
                <p className='text-3xl font-bold text-yellow-500'>{name}</p>
                <p>Price: {price}/-Tk</p>
                <p>Rating: {rating}</p>
                <p>Details: {description.slice(0, 115)}</p>
            </div>
            <Link to='/checkout' className=' block bg-yellow-500  rounded-full py-2 px-7 font-bold mt-3'>Order Now</Link>
        </div>
    );
};

export default MenusCart;