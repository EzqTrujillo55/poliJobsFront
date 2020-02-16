//Componentes de React
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

//Estilos
import '../styles/App.css';

//Contenedores
import Home from './Showofert';
import LoginForm from './Login';
import Createofert from "./Createofert";
import Showofert from './Showofert';
import CV from  "./CV";

//Componentes
import MenuSup from '../componentes/MenuSup';
import Postulantes from "../componentes/Postulantes";
import Btnpostulantes from "../componentes/Btnpostulantes";

var token = localStorage.getItem('token');
var contenido;

class App extends React.Component {
  render(){
 /*   console.log('renderizando'); 
  if(token===null || token==='undefined'){
    contenido = <LoginForm/>;
    }else{
    contenido = <Home/>; 
    }*/
  return (
    <div className="App">
        {/* Voy a comentar estos para probar mi componente de Hoja de Vida
      <BrowserRouter>
      <MenuSup/>
      <Route exact path='/home' component={Showofert}/>
      <Route path='/ficha/:id'/> 
      <Route path='/crearOferta' component={Createofert}/> 
      <Route path='/verOfertas' component={Showofert}/>
      <Route path='/postulantes' component={Postulantes}/>
      <Route path = '/btnpostulantes/:id' component = {Btnpostulantes}/>
      </BrowserRouter>
      */}
      <CV/>
           
    </div>
  );
}
}

export default App;
