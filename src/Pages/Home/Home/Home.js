import React from 'react';
import CateringMenu from '../../CateringMenu/CateringMenu/CateringMenu';
import ChooseUs from '../../ChooseUs/ChooseUs';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div className='lg:mx-10 mx-4'>
            <Banner />
            <CateringMenu />
            <ChooseUs />
        </div>
    );
};

export default Home;