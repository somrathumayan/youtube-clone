import React from 'react';
import Header from './../Components/Header';
import Sidebar from './../Components/Sidebar';
import NotFound from './../Components/NotFound';

const NotFoundPage = () => {
    return (
        <div>
            <Header />
            <div className="app__page">
                <Sidebar></Sidebar>
                <NotFound />
            </div>
        </div>
    );
};

export default NotFoundPage;