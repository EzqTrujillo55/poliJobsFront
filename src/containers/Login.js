import React from 'react';
import '../styles/Registro.css';
class Login extends React.Component{
  state={
    correo:'',
    clave:''
  }

  
    render(){
        return(
          <body id="fondo">
          <div class="container">
          <h1>Login</h1>
        <form action="#" method="POST">
          <input type="text" placeholder="username" value={this.state.correo}  onChange={(e)=>this.handleChangeInput(e, 'correo')} class="field"/>
          <input type="password" placeholder="password" value={this.state.clave}  onChange={(e)=>this.handleChangeInput(e, 'clave')} class="field"/>
          <input type="submit" value="login" class="btn" onClick={this.handleSubmit}/>
          </form>
        <div class="pass-link">
          <a href="#" >Lost your password?</a>
        </div>	
      </div>
      </body>
        );
    }

    handleChangeInput = ($e, input) => {
      const newState = {};
      newState[input] = $e.target.value;
      this.setState(newState);
     
  };

    handleSubmit=(e)=>{
      e.preventDefault();
      fetch('http://localhost:8000/api/login_check', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.correo,
            password: this.state.clave,
          })
          
        })
      

  }

}





export default Login; 