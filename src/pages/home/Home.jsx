import React from 'react';
import Banner from '../../components/banner/Banner';

import ChooseUs from '../../components/chooseUs/ChooseUs';
import Popolar from '../../components/popolar/Popolar';
import SixCard from '../../components/sixCard/SixCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SixCard></SixCard>
            <ChooseUs></ChooseUs>
            <Popolar></Popolar>
        
        </div>
    );
};

export default Home;