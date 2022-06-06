import logo from "./logo.svg";
import {InputForm} from "./InputForm";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import axios from "axios";

function helloReact() {
    alert("hello react");
}

async function todayActivity() {
    const response = await axios.get(
        `https://www.boredapi.com/api/activity`
    );
    alert(response.data.activity)
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
           <section>
               <h2> Fetch task for today</h2>
               <Button onClick={todayActivity}>I am bored 😑</Button>
           </section>
       </div>
    )
}

export default Home;