import React from 'react';
import './App.css';
import Chats from './Components/Chats';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="App">
      <div className="upperbackground">

      </div>
      <div className="lowerbackground">
        
      </div>
      <div className="app__body">
        <Sidebar/>
        <Chats/>      
      </div>
      
    </div>
  );
}

export default App;
