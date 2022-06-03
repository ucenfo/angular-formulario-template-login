import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) registrar!: NgForm;
  nicknameExiste = false;
  provincias: string [] = ['Cartago', 'San José', 'Heredia'];
  defaultProvincia = "Cartago";
  apodo = '';
  contrasenia = '';
  generos: string [] = ['masculino', 'femenino'];

  changeStatusNickName() {
    this.nicknameExiste = !this.nicknameExiste;
  }
  fieldTextType = false;
  toggleFielType() {
    this.fieldTextType = !this.fieldTextType;
  }


  

  

  // nombre = this.registrar.value.username;
  // apellido1 = this.registrar.value.apellido1;
  // apellido2 = this.registrar.value.apellido2;
  // nickname = this.registrar.value.nickname;
  // correo = this.registrar.value.email;



  // @ViewChild('f', {static: false}) registrare: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   const nombre = form.value.username;
  //   const apellido1 = form.value.apellido1;
  //   const apellido2 = form.value.apellido2;
  //   const nickname = form.value.nickname;
  //   console.log(nombre, apellido1, apellido2, nickname);
  // }
  onSubmit(){
    console.log(this.registrar);
    const nombre = this.registrar.value.username;
    console.log(nombre);
    console.log(this.registrar.controls.apellido1.status);
    console.log(this.registrar.controls.apellido1.touched);
  }
}
