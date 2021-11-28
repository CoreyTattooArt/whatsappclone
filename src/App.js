import React, { useState, useEffect } from 'react';
import './App.css'
import NewChat from './components/NewChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 2, title: 'Copérnico', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 3, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 4, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 5, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 6, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 7, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 8, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}, 
    {chatId: 9, title: 'Leandrim', image:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg'}
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id:'bob',
    avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg',
    name:'Corey'
  })

  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  return (
    <div className="app-windows">
      <NewChat 
            chatList={chatList}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
      />
      <div className="mainContainer">
        <div className="sidebar">
          <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#54585B'}}/>
            </div>
            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{color: '#54585B'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#54585B'}}/>
            </div>
          </div>
          </header>
          <div className="search">
          <div className="search--input">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <input type="search" placeholder="Pesquisar ou começar uma nova conversa" name="" id="" />
          </div>
          </div>
          <div className="chatlist">
            <div className="chatList--scrollbar">
              {chatList.map((item, key) => (
                <ChatListItem
                  key={key}
                  data={item}
                  active={activeChat.chatId === chatList[key].chatId}
                  onClick={()=>setActiveChat(chatList[key])}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="contentarea">
          
              {activeChat.chatId !== undefined &&
                <ChatWindow 
                  user={user}
                />
              }
              {activeChat.chatId == undefined &&
                <ChatIntro />
              }
          </div>
          </div>
</div>
  )
}