import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('f', { static: false }) formulario!: NgForm;
  existeNickName = false;
  existeEmail = false;
  phoneValid = false;
  emailValid = false;
  codMailValid = false;
  codPhoneValid = false;
  provincias: string [] = [];
  cantones: string[] = [];
  distritos: string [] = [];
  provinciaSelecionada = "";
  cantonSelecionado = "";
  distritoSelecionado = "";
  contrasenia = '';
  contrasenia2 = '';
  codigotelefono: number = 0;
  codigoCorreo: number = 0;
  generos: string [] = ['masculino', 'femenino'];
  // isNumTel: boolean = 
  tel = '';
  /**
   * Método temporal para cambiar el estado de la existencia de de las variables booleanas
   */
  changeStatusNickName() {
    this.existeNickName = !this.existeNickName;
    this.existeEmail = !this.existeEmail;
  }
  /**
   * Método:            verificarExistenciaNickName
   * Descripción:       Método que permite verificar si el nickname ingresado por el usuario existe
   * @param nickname    Variable de tipo text ingresado por el usuario
   */
  verificarExistenciaNickName(nickname: Event): void {
    const nombre = (nickname.target as HTMLInputElement).value;
    console.log(nombre);
    // TODO: verificar en la base de datos si el ninckname ingresado existe y que retorne un boolean
    // this.existeNickName = // metodo
  }
  /**
   * Método:            verificarExistenciaEmail
   * Descripción:       Método que permite verificar si el correo ingresado por el usuario ya existe
   * @param email       variable de tipo texto ingresada por el usuario
   * @param valid       variable de tipo boolean que indica si el correo ingresado es válido
   */
  verificarExistenciaEmail (email: Event, valid: any): void {
    const correo = (email.target as HTMLInputElement).value;
    console.log(correo);
    // TODO: verificar en la base de datos si existe el correo ingresado y que retorne un booleano
    // this.existeEmail = // metodo

    if (valid && !this.existeEmail) { // si es es válido y no existe genera codigo
      this.emailValid = true;
      this.generarCodigoVerificacionCorreo();
    } else {
      this.emailValid = false;
    }
  }
  /**
   * Método:            cargarProvincias
   * Descripción:       Método que permite cargar las provincias de la base de datos.
   */
  cargarProvincias(){
    this.provincias = ['Cartago', 'San José', 'Heredia', 'Alajuela'];
    // TODO: hacer consulta a la base de datos
  }
  /**
   * Método:            cargarCanton
   * Descripción:       Método que permite cargar los cantones que pertenecen a una provincia determinada
   * @param provincia   Variable de tipo text que corresponde a la provincia elegida por el usuario.
   */
  cargarCanton(provincia: Event): void {
    const provinciaElegida = (provincia.target as HTMLInputElement).value;
    this.cantonSelecionado = '';
    this.distritoSelecionado = '';
    console.log(provinciaElegida);
    // TODO: consulta a la BD para traer los cantones de la provincia elegida.
    this.cantones = ['Oreamuno', 'Paraíso'];
  }
  /**
   * Método:            cargarDistrito
   * Descripción:       Método que permite cargar los distritos que pertenecen al cantón elegido por el usuario.
   * @param canton      Variable de tipo texto que representa el cantón elegido por el usuario.
   */
  cargarDistrito(canton: Event): void {
    const cantonElegido = (canton.target as HTMLInputElement).value;
    this.distritoSelecionado = '';
    console.log(cantonElegido);
    // TODO: consulta a la BD para traer los distritos del cantón seleccionado
    this.distritos = ['San Rafael', 'Cot'];
  }
  /**
   * Método:            generarCodigoVerificacionCorreo
   * Descripción:       Método que permite solicitar un código de verficación para el correo y ser enviado al usuario al correo aportado.
   */
  generarCodigoVerificacionCorreo(): void {
    this.codigoCorreo = 587698;
    console.log(this.codigoCorreo);
    // TODO: solicitud de generar código a la logica, enviarlo al usuario por correo y recibirlo en este método.
  }
  /**
   * Método:            generarCodigoVerificacionTelefono
   * Descripción:       Método que permite solicitar un código de verficación para el número de teléfono y ser enviado al usuario por SMS al teléfono aportado.
   */
  generarCodigoVerificacionTelefono(isValidPhone: any): void {
    if (isValidPhone){
      this.phoneValid = true;
      this.codigotelefono = 987654
      console.log(this.codigotelefono);
    } else {
      this.phoneValid = false;
    }
    
    // TODO: solicitud de generar código a la logica, enviarlo al usuario por correo y recibirlo en este método.
  }
  validarCodCorreo(codCorreoIngresado: Event, ): void {
    const codIngresado = Number((codCorreoIngresado.target as HTMLInputElement).value);
    if (this.codigoCorreo === codIngresado) {
      this.codMailValid = true;
      console.log(this.codMailValid);
    } else {
      this.codMailValid = false;
    }
  }
  validarCodTelefono(codTelefonoIngresado: Event, valid: any): void {
    const codIngresado = Number((codTelefonoIngresado.target as HTMLInputElement).value);
    if (this.codigotelefono === codIngresado) {
      this.codPhoneValid = true;
      console.log(this.codMailValid);
    } else {
      this.codPhoneValid = false;
    }
  }
  /**
   * Método:            ngOnInit
   * Descripción:       Método que permite precargar los elementos necesario en la página
   */
  ngOnInit(): void {
    this.cargarProvincias();
  }
  /**
   * Método:            onSubmit
   * Descripción:       Método que permite enviar los datos ingresados por el usuario para crear un nuevo perfil
   */
  onSubmit(){
    console.log(this.formulario);
    const nombre = this.formulario.value.name;
    console.log(this.formulario.value.notificacion);
  }
}
