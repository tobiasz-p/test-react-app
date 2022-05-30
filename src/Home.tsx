import logo from "./logo.svg";
import {InputForm} from "./InputForm";
import Button from "react-bootstrap/Button";
import React from "react";

function helloReact() {
    alert("hello react");
}

function Home(){
    return(
       <div>
           <img src={logo} className="App-logo" alt="logo" />

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
       </div>
    )
}

export default Home;