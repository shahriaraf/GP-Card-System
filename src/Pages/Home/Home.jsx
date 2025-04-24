import React from 'react';
import Banner from './Banner';
import SearchBar from './SearchBar';
import ImageSlider from './ImageSlider';
import Navbar from '../../Layout/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ImageSlider></ImageSlider>
        </div>
    );
};

export default Home;