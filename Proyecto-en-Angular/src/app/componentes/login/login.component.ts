import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//Servicios
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables

  url = '../../../assets/login.json' ;
  datosLogin: any = {};

  errorCorreo: string;
  errorContrasena: string;

  constructor(private loginservice:LoginService, private router:Router) {
      this.loginservice.datosLogin(this.url).subscribe((datos) => {
      this.datosLogin = datos;
    })
   }

  ngOnInit(): void {
  }

  validarDatos(correo, contrasena){
    if(correo == '' || contrasena == ''){
      if(contrasena != ''){
        this.errorCorreo = '...campo vacio';
        this.errorContrasena = '';
      }else if(correo != ''){
        this.errorCorreo = '';
        this.errorContrasena = '...campo vacio';
      }else{
        this.errorCorreo = '';
        this.errorContrasena = '';
      }
    }else{
      if(correo != this.datosLogin.correo || contrasena != this.datosLogin.contrasena){
        if(correo == this.datosLogin.correo){
          this.errorCorreo = '';
          this.errorContrasena = '...los datos no coinciden';
        }else{
          this.errorCorreo = '...los datos no coinciden';
          this.errorContrasena = '';
        }
      }else{
        this.errorCorreo = '';
        this.errorContrasena = '';
        this.router.navigate(['tienda']);
      }
    }
  }

}
