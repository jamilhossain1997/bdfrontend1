import React from 'react';
import './Sidebar.css';
import { Avatar, Collapse, IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
      <>
         <div className='sidebar'>
            <div className='sidebar__header'>
                 <Avatar/>
                 <div className="sidebar__headerRight">
                <IconButton>
                  <DonutLargeIcon />
                </IconButton>
                <IconButton>
                  <ChatIcon />
                </IconButton>
                <IconButton>
                 
                </IconButton>
              </div>
            </div>
            <div className="sidebar__search">
            <div className="sidebar__searchContainer">
              <SearchOutlined />
              <input
                placeholder="Search or Start a new chat"
                type="text"
              />
            </div>
          </div>
            <div className='sidebar__chats'>
                    <SidebarChat/>
            </div>
         </div>
      </>
  )
};

export default Sidebar;
