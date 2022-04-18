import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MenuDetails = () => {
    const navigate = useNavigate()
    const { menuId } = useParams();
    const [menus, setMenus] = useState([]);

    const [food, setFood] = useState();
    console.log(food);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/foodieland/main/public/data.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    console.log(menus.map(d => d.id));
    // const singlemenu = data =>{

    //     const menu = data.filter(menu => menu.map((d => d.id) === menuId));
    //     setFood(menu)
    // }

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='h-[80vh]'>

            <h1>Menu Details{menuId}</h1>
            <button onClick={handleCheckout} className='bg-yellow-400 px-5 py-2 rounded-full font-medium hover:shadow-md mt-3'>Checkout Now</button>

        </div>
    );
};

export default MenuDetails;