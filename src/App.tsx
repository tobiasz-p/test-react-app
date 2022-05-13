import React from 'react';
import logo from './logo.svg';
import './App.css';

function helloReact() {
  alert("hello react");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button onClick={helloReact}>say hello react</button>
        </div>
        <a
            className="App-link"
            href="https://github.com/tobiasz-p/test-react-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          github.com/tobiasz-p
        </a>

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
