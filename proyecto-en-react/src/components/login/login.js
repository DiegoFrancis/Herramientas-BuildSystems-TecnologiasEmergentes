import React from 'react';
import LoginJSON from "../../login.json";
import './login.css';

import App from '../../App';

export default class Login extends React.Component {

  //Variables
  errorCorreo = '';
  errorContrasena = '';

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'' 
    }
  }

  obtenerEmail(email){
    this.setState({
      email: email
    });
  }

  obtenerPassword(password){
    this.setState({
      password: password
    });
  }

  enviarDatos = (e) =>{
    let state = this.state;
    if(state.email == LoginJSON.correo && state.password == LoginJSON.contrasena){
     this.props.onClick(); 
    }
  }

  render(){

    return (
      <div className="contenedor-login">
        <div className="formulario-login">
           <h1>Iniciar Sesión</h1>
           <form>
            <label htmlFor="correo">Correo electrónico <span>{this.errorCorreo}</span></label>
             <input
               onChange={(event)=>{ this.obtenerEmail(event.target.value)}} 
               type="email" 
               value={this.state.email}
               id="correo"
               required
               />
             <label htmlFor="contrasena">Contraseña <span>{this.errorContrasena}</span></label>
             <input
              onChange={(event)=>{ this.obtenerPassword(event.target.value)}} 
              type="password" 
              value={this.state.password}
              id="contrasena"
              required
              />
              <div className="boton-ingresar-login">
                <input
                  onClick={ this.enviarDatos }
                  type="submit"
                  value="Ingresar"
                />
              </div>
           </form>
         </div>
       </div>
     );
  }
}