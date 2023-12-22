// import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Navbar';
import HomeScreen from '../src/components/HomeScreen';
import Body from './components/body'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HomeScreen />
        <Body />
      </header>
    </div>
  );
}

export default App;
