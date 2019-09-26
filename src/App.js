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
        <p>Designed and Coded by <b>Usman Fayyaz</b>.</p> <br />
        <a href="https://github.com/UsmanFayyaz/pomodoro-clock">Link to github repository.</a>
      </div>
    </div>
  );
}

export default App;
