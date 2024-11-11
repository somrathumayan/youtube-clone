import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';



const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <img 
                className='header__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" 
                />
            </div>
            <div className="header__input">
                <input type="text" placeholder='Search'/>
                <SearchIcon className='header__inputButton'/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationsIcon className='header_icon' />
                <Avatar
                    alt="Remy Sharp"
                    src="https://media.licdn.com/dms/image/v2/C4E03AQESiojs_5NqTg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1600533337015?e=2147483647&v=beta&t=kYOTZTlTQKDaOFz10iHbUEUh0FBgZYoSf9F0OmP_Erk"
                />
            </div>
        </div>
    );
};

export default Header;