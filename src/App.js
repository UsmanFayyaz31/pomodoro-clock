import React from 'react';
import './App.css';
import Timer from './components/timer'
import UpperBody from './components/upperBody';


function App() {
  return (
    <div>
      <div id="main-container">
        <UpperBody />
        <Timer />
      </div>
      <div id="author">
        <p>Designed and Coded by</p> <br />
        <a href="https://github.com/UsmanFayyaz/pomodoro-clock">Usman Fayyaz</a>
      </div>
    </div>
  );
}

export default App;
