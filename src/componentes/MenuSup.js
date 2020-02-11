import React from 'react';
import {Menu} from 'antd';
import {Link, } from 'react-router-dom';
import '../styles/Menu.css';
class MenuSup extends React.Component{
    salir=()=>{
        localStorage.clear();
        window.location.reload(); 
      } 
    render(){
        return(
            <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link style={{color:"white" }} to="/home">Polijobs</Link></Menu.Item>
            <Menu.Item key="2" ><Link  to="/crearOferta">Crear Oferta</Link></Menu.Item>
            <Menu.Item key="3" ><Link   to="/verOfertas">Ver Ofertas</Link></Menu.Item>
            <Menu.Item onClick={this.salir}><Link style={{color:"white", marginLeft: "150vh" }} > Cerrar sesión</Link></Menu.Item>
          </Menu> 
        )
    }
}

export default MenuSup; 
