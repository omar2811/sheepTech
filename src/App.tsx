import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './componentes/nav';
import ContainerCust from './componentes/containerCust';

function App() {
 
  return (
    <div>
    <Nav/>
    <ContainerCust ontainerCust elemento={<h1 className='text'>Hola</h1>} /> 
    </div>
  );
}

export default App;
