import React from 'react';
import '../styles/App.css';
import {BrowserRouter} from 'react-router-dom'; 
import Home from './Home';
import LoginForm from './Login';

var token = localStorage.getItem('token');
var contenido;

class App extends React.Component {
  render(){
    console.log('renderizando'); 
  if(token===null || token==='undefined'){
    contenido = <LoginForm/>;
    }else{
    contenido = <Home/>; 
    }
  return (
    <div className="App">
      <BrowserRouter>
        {contenido}
      </BrowserRouter>
           
    </div>
  );
}
}

export default App;
