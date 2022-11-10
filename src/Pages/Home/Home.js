import React from 'react';
import useTitle from '../../useTitle/UseTitle';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;