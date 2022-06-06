import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('f', { static: false }) registrar!: NgForm;
  nicknameExiste = false;
  provincias: string [] = ['Cartago', 'San José', 'Heredia', 'Alajuela'];
  cantones: string [] = ['Oreamuno', 'Paraíso'];
  distritos: string [] = ['San Rafael', 'Cot'];
  defaultProvincia = "";
  defaultCanton = "";
  defaultDistrito = "";
  apodo = '';
  contrasenia = '';
  contrasenia2 = '';
  tel = '';
  generos: string [] = ['masculino', 'femenino'];

  changeStatusNickName() {
    this.nicknameExiste = !this.nicknameExiste;
  }

  cargarCanton(provincia: any) {
    this.defaultCanton = '';
    console.log(provincia.value);
    // TODO: consulta a la BD para traer los cantones de la provincia elegida.
}
cargarDistrito(canton: any) {
  this.defaultDistrito = '';
  console.log(canton.value);
}

  // @ViewChild('f', {static: false}) registrare: NgForm;


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
