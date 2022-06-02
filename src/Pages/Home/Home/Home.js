import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import CateringMenu from '../../CateringMenu/CateringMenu/CateringMenu';
import ChooseUs from '../../ChooseUs/ChooseUs';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner />
            <CateringMenu />
            <ChooseUs />
            <Footer />
        </div>
    );
};

export default Home;