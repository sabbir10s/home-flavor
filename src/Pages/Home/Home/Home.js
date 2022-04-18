import React from 'react';
import CateringMenu from '../../CateringMenu/CateringMenu/CateringMenu';
import ChooseUs from '../../ChooseUs/ChooseUs';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner />
            <CateringMenu />
            <ChooseUs />
        </div>
    );
};

export default Home;