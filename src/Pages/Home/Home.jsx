import React from 'react';
import Banner from './Banner';
import SearchBar from './SearchBar';
import ImageSlider from './ImageSlider';
import Footer from '../../Layout/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ImageSlider></ImageSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;