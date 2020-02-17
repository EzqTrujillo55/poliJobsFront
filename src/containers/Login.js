import React from 'react';
import { Form, Input, Button, Card,Menu,  Modal, Carousel, Select} from 'antd';
import Auth from '../services/auth';
import '../styles/Login.css';
const { Option } = Select;
class Login extends React.Component{
   state={
     usuario: '',
     pass: '',
     rol: '',
     visible: false,
     visible2: false
   }

   showModal = () => {
     this.setState({
       visible: true,
     });
   };
 
   handleOk = e => {
     console.log(e);
     this.setState({
       visible: false,
     });
   };
 
   handleCancel = e => {
     console.log(e);
     this.setState({
       visible: false,
     });
   };

   showModal2 = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };
  
   
   
    iniciar=()=>{  
      const {usuario, pass} = this.state;
        Auth.login(this.state.usuario, this.state.pass); 
              
    }
    

    registrar=()=>{
      var url = "http://localhost:8000/api/users";
      var data = {
        email: this.state.usuario,
        username: this.state.usuario,
        password: this.state.pass,
        roles: [this.state.rol]
      };
  
      fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
          
        }
      })
        .then(res => res.json())
        .catch(error => {
          console.error("Error:", error);
          
        })
        .then( console.log("aa"));
    }

    
    handleChangeInput = ($e, input) => {
      const newState = {};
      newState[input] = $e.target.value;
      this.setState(newState);
      
  };

  handleChange(value) {
    this.state.rol = value;
    console.log(value);
  }


      render() {
        
        return (
        <div>
            <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Polijobs</Menu.Item>
        <Menu.Item key="2" style={{ marginLeft:"75%" }} onClick={this.showModal2}>Registrarse</Menu.Item>
        <Menu.Item key="3"  onClick={this.showModal}>Iniciar Sesión</Menu.Item>
      </Menu>          

      <Modal
          title="Iniciar Sesión"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button id="iniciar"  type="danger" onClick={this.iniciar}>Iniciar</Button>
          ]}
        >
        
          <form>
            <label>Correo</label>
            <Input placeholder="micorreo@hotmail.com" onChange={(e)=>this.handleChangeInput(e, 'usuario')} /> 
            <label>Contraseña</label>
            <Input type="password" placeholder="******" onChange={(e)=>this.handleChangeInput(e, 'pass')} />  
          
          </form> 
        
        </Modal>

        
      <Modal
          title="Registrar Usuario"
          visible={this.state.visible2}
          onCancel={this.handleCancel2}
          footer={[
            <Button id="registrar"  type="danger" onClick={this.registrar}>Registrar</Button>
          ]}
        >
        
          <form>
            <label>Correo</label>
            <Input placeholder="micorreo@hotmail.com" onChange={(e)=>this.handleChangeInput(e, 'usuario')} /> 
            <label>Contraseña</label>
            <Input type="password" placeholder="******" onChange={(e)=>this.handleChangeInput(e, 'pass')} />
            <label>Rol</label>
            <Select onChange={this.handleChange.bind(this)} style={{ width: 120 }}>
                <Option value="Empresa">Empresa</Option>
                <Option value="Estudiante">Estudiante</Option>
            </Select>
            
          
          </form> 
        
        </Modal>

        <Carousel autoplay effect="fade">
    <div className="car1">
      <h3>A un click del éxito!</h3>
    </div>
    <div className="car2">
      <h3>Tú nos importas</h3>
    </div>
    <div className="car3">
      <h3>Somos PoliJobs</h3>
    </div>
   
  </Carousel>
           
          </div>
        );
      }
}

const LoginForm = Form.create({ name: 'loginform' })(Login);

export default LoginForm;  