import React from 'react';
import { useParams } from 'react-router-dom';

const MenuDetails = () => {
    const { menuId } = useParams();
    return (
        <div>

            <h1>Menu Details{menuId}</h1>

        </div>
    );
};

export default MenuDetails;