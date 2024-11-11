import React from 'react';
import '../App.css';
import Header from './../Components/Header';
import Sidebar from './../Components/Sidebar';


const Search = () => {
    return (
        <div>
            <Header />
            <div className="app__page">
                <Sidebar />
                
            </div>
        </div>
    );
};

export default Search;