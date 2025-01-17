import React from 'react';
import './Sidebar.css';
import './SidebarRow';
import './SidebarRow.css'
// import HomeIcon from '@mui/icons-material/Home';

const SidebarRow = ({selected, Icon, title}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    );
};

export default SidebarRow;