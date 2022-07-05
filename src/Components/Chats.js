import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import '../Css/Chats.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chats() {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <IconButton>
                <AttachFileIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>

        </div>
      </div>

      <div className="chat__body">
        <p>
            <span className='chat__name'>
                Sonny
            </span>
            This is a message
            <span className="chat__timestamp">
                {new Date()
                .toUTCString()}
            </span>
        </p>

      </div>
    </div>
  )
}

export default Chats
