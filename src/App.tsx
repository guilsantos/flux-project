import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>
          Minha esposa é <span>MARAVILHOSA</span> =D
        </Title>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
