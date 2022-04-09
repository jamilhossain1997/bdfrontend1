import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const SidebarChat = ({addNewChat}) => {
    const [seed,setSeed]=useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    })

    const createChat=()=>{
      const roomName=prompt("Please enter name for chat");

      if(roomName){
        //do some clever database stuff...
      }
    };
  return !addNewChat?(
    <div className="sidebarChat">
  
      <div className="sidebarChat__wrapper">
        <Avatar src={`https://avatars.dicebear.com/api/human/:seed.svg`}/>
        <div className="sidebarChat__info">
          <h2 className="room__name"></h2>
          <p className="sidebar__lastmessages__color">
            <span className="sidebar__lastMessageName">
              
            </span>
            
          </p>
        </div>
      </div>
    
    <div className="sidebarChat__delete" >
      <DeleteForeverIcon />
    </div>
  </div>

  ):
  (
    <div onClick={createChat}>
        <h2>Add new Chat</h2>
    </div>
  )

}

export default SidebarChat;
