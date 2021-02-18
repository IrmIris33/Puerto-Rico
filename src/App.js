import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './Components/Main Container/NavBar';
import Intro from './Components/Intro/Intro';


function App() {
  return (
    <div className="App">
        
        <NavBar />
        <Intro />

    </div>
  );
}

export default App;
