import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>
          Alteração de código feita pelo codesandbox
        </Title>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>
          Minha esposa Brenda é <span>MARAVILHOSA</span> S2
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
