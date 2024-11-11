import React from 'react';
import '../App.css';
import Header from './../Components/Header';
import Sidebar from './../Components/Sidebar';
import RecommendedVideos from './../Components/RecommendedVideos';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="app__page">
                <Sidebar></Sidebar>
                <RecommendedVideos></RecommendedVideos>
            </div>
        </div>
    );
};

export default Home;