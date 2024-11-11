import React from 'react';
import './Sidebar.css';
import './Sidebar';
// import './SidebarRow';

import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>
            <SidebarRow Icon={WhatshotIcon} title="Trending"></SidebarRow>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"></SidebarRow>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library"></SidebarRow>
            <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"></SidebarRow>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"></SidebarRow>
            <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos"></SidebarRow>
            <SidebarRow Icon={ExpandMoreIcon} title="Show more"></SidebarRow>
            <hr />

            
        </div>
    );
};

export default Sidebar;