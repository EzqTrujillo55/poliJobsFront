import React from 'react';
import '../styles/App.css';
import '../styles/bootstrap.min.css';
import Navbar from '../componentes/Navbar/Navbar';
import Carrusel from '../componentes/Carousel/Carrusel';
import NavBootstrap from '../componentes/NavBootstrap/NavBootstrap';
import CarouselBootstrap from '../componentes/CarouselBootstrap/CarouselBootstrap';
import {Route, BrowserRouter} from 'react-router-dom'; 
import Registro from '../containers/Registro';
import Home from '../containers/Home';
import DinamicTable from '../componentes/Table/Table';
import Login from './Login';
function App() {
  return (
    <div>
    
    <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/ficha/:id'/> 
            <Route path='/login'component={Login}/> 
            <Route path='/registro' component={Registro}/>
            <Route path='/info' component={DinamicTable}/>  
            
    </BrowserRouter>     

    </div>    
  );
}

export default App;
