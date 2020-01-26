import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';
class NavBootstrap extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <a class="navbar-brand" href="#">Poli Jobs</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"><Link className="text-white" to="/registro">Registrarse</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link className="text-white" to="/login">Iniciar Sesión</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link className="text-white" to="/info">Ver tabla</Link></a>
      </li>
    </ul>
  </div>    
            </nav> 
  
        )
    }
}

export default NavBootstrap;