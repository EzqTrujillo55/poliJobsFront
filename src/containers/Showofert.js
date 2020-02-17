import React from 'react';
 import {Button} from 'antd';
import Ofertas from '../services/ofertas';
import ListaOfertas from "../componentes/Ofertas";
import Ficha from "../componentes/Ficha";
import {Route, BrowserRouter} from 'react-router-dom';



class Showofert extends React.Component{
    state={
        tarrOfertas:[],
        arrOfertas:[]
    }
    
    async componentDidMount(){
        this.setState({tarrOfertas: await Ofertas.getOferta()})
        this.setState({arrOfertas: this.state.tarrOfertas['hydra:member']});
        console.log('listo' , this.state.arrOfertas);
    }

    render(){
    return(
    <div>
        
        <h1>Bienvenido!</h1>
        <h3 align="center"> LISTA DE  OFERTAS</h3>

        <BrowserRouter>
            <Ofertas/>
            <Route patch='/ficha/:id' component={Ficha}/>
        </BrowserRouter>

        {this.state.arrOfertas.map((item,index)=>(
            <div>
            <h5>{item.NombreEmpresa}</h5>
            <h5>{item.Conocimientos}</h5>
            <h5>{item.Salario}</h5>
            </div>
        ))}
        
    </div>
    )
    
    }
    
}

export default Showofert; 