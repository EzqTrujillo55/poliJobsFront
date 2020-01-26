import React from 'react';
import '../styles/Registro.css';
class Registro extends React.Component{
    render(){
        return(
  <div class="container" >           
    <div class="card mt-4">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="picapica@mail.com"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Nombre</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Pedro"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Apellido</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Picapiedra"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Ciudad</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Quito"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Ocupación</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Estudiante"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
</div>
</div>
        );
    }
}



export default Registro; 