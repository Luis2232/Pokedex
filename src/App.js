import './App.css';
import React from 'react';
import Select from "./components/Select";
import Pokeball from './imgs/shield.png';
import Alexios from "./components/Alexios"
import Tipop from "./components/Tipop";
import Card from './components/Cartita';



function App() {
  return (
  <div className="App">
  <header className="App-header">
  <img src={Pokeball} className="app-logo" alt='logo'/>
  <Select/>
  </header>
  <Alexios/>
  <Tipop/>
  <Card/>
  </div>
  );
}

export default App;
