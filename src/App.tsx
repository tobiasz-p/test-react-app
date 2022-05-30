import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/custom">Custom</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<h1>React test app</h1>}/>
              <Route path='/contact' element={<a href="https://github.com/tobiasz-p"><h1>github.com/tobiasz-p</h1></a> }/>
              <Route path='/custom' element={<h1>Custom page</h1>}/>
          </Routes>
      </div>
  );
}

export default App;
