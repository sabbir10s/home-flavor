import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import menuInfo from './menuInfo';

const MenuDetails = () => {
    const { menuId } = useParams();
    const [menus, setMenus] = useState([]);
  
    const [food, setFood] = useState();
    console.log(food);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbir10s/foodieland/main/public/data.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    console.log(menus.map(d=>d.id));
    // const singlemenu = data =>{

    //     const menu = data.filter(menu => menu.map((d => d.id) === menuId));
    //     setFood(menu)
    // }
   
    return (
        <div>

            <h1>Menu Details{menuId}</h1>

        </div>
    );
};

export default MenuDetails;