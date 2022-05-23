import React from 'react';
import logo from './logo.svg';
import './App.css';
import {InputForm} from "./InputForm";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <InputForm defaultValue={'hello form'}/>
        <div>
          <Button onClick={helloReact}>say hello react</Button>
        </div>
        <a
            className="App-link"
            href="https://github.com/tobiasz-p/test-react-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          github.com/tobiasz-p
        </a>


      </header>
    </div>
  );
}

export default App;
