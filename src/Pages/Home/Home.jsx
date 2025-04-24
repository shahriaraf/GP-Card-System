import React from 'react';
import Banner from './Banner';
import SearchBar from './SearchBar';
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ImageSlider></ImageSlider>
        </div>
    );
};

export default Home;