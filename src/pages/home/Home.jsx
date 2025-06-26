import React from 'react';
import Banner from '../../components/banner/Banner';

import ChooseUs from '../../components/chooseUs/ChooseUs';
import Popolar from '../../components/popolar/Popolar';
import SixCard from '../../components/sixCard/SixCard';
import Review from '../../components/review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SixCard></SixCard>
            <Popolar></Popolar>
            <Review></Review>
            <ChooseUs></ChooseUs>
            
        
        </div>
    );
};

export default Home;