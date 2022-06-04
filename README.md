# ComponentesVarios

El objetivo de este proyecto es crear componentes que sirvan de templates o ejemplos en proyectos utilizando [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Dependencias utilizadas

A parte de las dependencias que se incluyen de forma automática al hacer la instalación mediante la línea de comando

```
    ng new <nombre proyecto>
```
En el cual se puede instalar el `router`

Adicionalmente se instaló en este proyecto:

1. Bootstrap, ver [npmjs.com](https://www.npmjs.com/package/bootstrap). En este caso se instaló de forma local agregando `--save`
```
    npm install --save bootstrap
```
2. jQuery, ver [npmjs.com](https://www.npmjs.com/package/jquery) y [api.jquery.com](https://api.jquery.com/) También se instaló de forma local.
```
    npm install --save jquery
```
3. ng-bootstrap, que incluye widged de bootstrap, ver [npmjs.com](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap), y [ng-bootstrap.github.io](https://ng-bootstrap.github.io/#/home)
```
    ng add @ng-bootstrap/ng-bootstrap
```
4. ngx-show-hide-password, permite manipular el texto incluido en un `input` de tipo `password`, de forma que se puede ver u ocultar. Ver [npmjs.com](https://www.npmjs.com/package/ngx-show-hide-password)
```
    npm install ngx-show-hide-password --save
```
5. @fortawesome/angular-fontawesome, ver [npmjs.com](https://www.npmjs.com/package/@fortawesome/angular-fontawesome), este da acceso a la librería de imágenes de [FOrtAwesome/Font-Avesome](https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons).
```
    npm i @fortawesome/angular-fontawesome
    npm install @fortawesome/fontawesome-svg-core
    npm install @fortawesome/free-solid-svg-icons
```

Una vez instalados los dos puntos anteriores, se puede aplicar como componente, ver [stackblitz.com](https://stackblitz.com/edit/angular-okrmdi?embed=1&file=src/app/app.component.html), y [snyk.io](https://snyk.io/advisor/npm-package/ngx-show-hide-password)
```
    <show-hide-password size="lg" [btnOutline]="false">
        <input type="password" name="..." >
    </show-hide-password>
```

## Validaciones

Para verificar el patrón en la creación de la clave se usaron los siguientes:
```
    [pattern]="'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'"
    [pattern]="'(\\S*$)'"
```
La primera parte establece que sea al menos de 8 caracteres, que al menos uno letra sea mayúscula, una minúscula, un número y un caracter especial de los ahí incluidos.

El segundo permite comprobar que no existe espacios en blanco.

## Componentes desarrollados

1. creación de usuario (login), que incluye una template de los elementos básicos que se pueden utilizar en la creación de una cuenta. Este se utiliza formularios de Angular
2. Pipes, que nos permiten transformar elementos.