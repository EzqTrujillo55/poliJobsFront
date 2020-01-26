import React from 'react';
import { Layout, Menu, Affix } from 'antd';

const { Header } = Layout;

class Navbar extends React.Component{
  state = {
    top: 0,
    bottom: 10,
  };
    render(){
        return(
          <Affix offsetTop={this.state.top}> 
            <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    </Affix>
        )
    }
}

export default Navbar; 