import React from 'react';
import './App.css';
import Timer from './components/timer'
import UpperBody from './components/upperBody';


function App() {
  return (
    <div id="main-container">
      <UpperBody />
      <Timer />
    </div>
  );
}

export default App;
