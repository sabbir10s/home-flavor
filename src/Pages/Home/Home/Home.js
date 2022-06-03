import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import CateringMenu from '../../CateringMenu/CateringMenu/CateringMenu';
import Banner from '../Banner/Banner';
import Serve from '../Serve/Serve';


const Home = () => {
    return (
        <div>
            <Banner />
            <CateringMenu />
            <Serve />
            <Footer />
        </div>
    );
};

export default Home;