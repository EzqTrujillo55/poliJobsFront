import React from 'react';
import {Menu} from 'antd';

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
            defaultSelectedKeys={['3']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Polijobs</Menu.Item>
            <Menu.Item key="2">Crear Oferta</Menu.Item>
            <Menu.Item onClick={this.salir}>Cerrar sesión</Menu.Item>
          </Menu> 
        )
    }
}

export default MenuSup; 
