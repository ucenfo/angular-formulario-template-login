import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Cliente } from '../modelos/cliente.model';
import { Direccion } from '../modelos/direccion.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  cliente: Cliente = new Cliente('','','','','','','',
  new Direccion('','','',''));
  @ViewChild('f', { static: false }) formulario!: NgForm;
  existeNickName = false;
  existeEmail = false;
  phoneValid = false;
  emailValid = false;
  codMailValid = false;
  codPhoneValid = false;
  provincias: string [] = ['Elija una provincia'];
  cantones: string[] = ['Elija un cantón'];
  distritos: string [] = ['Elija un distrito'];
  provinciaSelecionada = 'Elija una provincia';
  cantonSelecionado = 'Elija un cantón';
  distritoSelecionado = 'Elija un distrito';
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
    const listProvincias = ['Cartago', 'San José', 'Heredia', 'Alajuela'];
    this.provincias.push(...listProvincias);
    // TODO: hacer consulta a la base de datos
  }
  /**
   * Método:            cargarCanton
   * Descripción:       Método que permite cargar los cantones que pertenecen a una provincia determinada
   * @param provincia   Variable de tipo text que corresponde a la provincia elegida por el usuario.
   */
  cargarCanton(provincia: Event): void {
    const provinciaElegida = (provincia.target as HTMLInputElement).value;
    if (provinciaElegida !== 'Elija una provincia') {
      this.distritoSelecionado = 'Elija un distrito';
      // TODO: consulta a la BD para traer los cantones de la provincia elegida.
      const listCantones: string[] = ['Oreamuno', 'Paraíso'];
      this.cantones.push(...listCantones);
      this.cantonSelecionado = 'Elija un cantón';
    }
  }
  /**
   * Método:            cargarDistrito
   * Descripción:       Método que permite cargar los distritos que pertenecen al cantón elegido por el usuario.
   * @param canton      Variable de tipo texto que representa el cantón elegido por el usuario.
   */
  cargarDistrito(canton: Event): void {
    const cantonElegido = (canton.target as HTMLInputElement).value;
    if (cantonElegido !== 'Elija un cantón') {
      this.distritoSelecionado = 'Elija un distrito';
    // TODO: consulta a la BD para traer los distritos del cantón seleccionado
    const listDistritos = ['San Rafael', 'Cot'];
    this.distritos.push('Elija un distrito');
    this.distritos.push(...listDistritos);
    }
  }
  /**
   * Método:            generarCodigoVerificacionCorreo
   * Descripción:       Método que permite solicitar un código de verficación para el correo y ser enviado al usuario al correo aportado.
   */
  generarCodigoVerificacionCorreo(): void {
    this.codigoCorreo = 587698;
    console.log(`Código de correo ` + this.codigoCorreo);
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
      console.log(`código de teléfono ` + this.codigotelefono);
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
    // console.log(this.formulario.controls.userAddress.value);
    console.log(this.formulario);
    this.cliente.nombre = this.formulario.controls.userData.value.name;
    this.cliente.apellido1 = this.formulario.controls.userData.value.apellido1;
    this.cliente.apellido2 = this.formulario.controls.userData.value.apellido2;
    this.cliente.nickname = this.formulario.controls.userData.value.nickname;
    this.cliente.correo = this.formulario.controls.userData.value.email;
    this.cliente.telefono = this.formulario.controls.userData.value.phone;
    this.cliente.contrasenia = this.formulario.controls.userData.value.password;
    this.cliente.direccion.provincia = this.formulario.controls.userAddress.value.provincia;
    this.cliente.direccion.canton = this.formulario.controls.userAddress.value.canton;
    this.cliente.direccion.distrito = this.formulario.controls.userAddress.value.distrito;
    this.cliente.direccion.dirExacta = this.formulario.controls.userAddress.value.address;
    console.log(this.cliente);
    // TODO: enviar info a logica de negocio.
  }
}
