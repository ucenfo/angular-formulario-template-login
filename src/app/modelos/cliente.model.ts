import { Direccion } from "./direccion.model";

export class Cliente {
    constructor(
        public nombre: string,
        public apellido1: string,
        public apellido2: string,
        public nickname: string,
        public correo: string,
        public telefono: string,
        public contrasenia: string,
        public direccion: Direccion){}
}