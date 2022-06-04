import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { faAd, faCandyCane, faCloudShowersHeavy, faEnvelopeOpenText, faGifts } from '@fortawesome/free-solid-svg-icons';
import { ShowHideService } from 'ngx-show-hide-password';
import { untilDestroyed } from "ngx-take-until-destroy";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  @ViewChild('f', { static: false }) registrar!: NgForm;
  nicknameExiste = false;
  provincias: string [] = ['Cartago', 'San José', 'Heredia', 'Alajuela'];
  defaultProvincia = "Cartago";
  apodo = '';
  contrasenia = '';
  tel = '';
  generos: string [] = ['masculino', 'femenino'];

  changeStatusNickName() {
    this.nicknameExiste = !this.nicknameExiste;
  }

  // Opcion 2
  faCandyCane = faCandyCane;
  faGifts = faGifts;
  faAd = faAd
  faCloudShowersHeavy = faCloudShowersHeavy
  faEnvelopeOpenText = faEnvelopeOpenText
  isHidden = true;


 


  

  

  // nombre = this.registrar.value.username;
  // apellido1 = this.registrar.value.apellido1;
  // apellido2 = this.registrar.value.apellido2;
  // nickname = this.registrar.value.nickname;
  // correo = this.registrar.value.email;



  // @ViewChild('f', {static: false}) registrare: NgForm;
  constructor(private service: ShowHideService) { 
    this.service
    .getObservable("password1")
    .pipe(untilDestroyed(this))
    .subscribe(show => {
      this.isHidden = !show;
    })
  }

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
  ngOnDestroy(): void {
      
  }
}
