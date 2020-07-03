# AlgoritmoReemplazoPaginas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.
Diseño de baja fidelidad: https://www.figma.com/file/ez5dVGRdv4tat5oCjOxqS0/Algoritmo-de-reemplazo-de-p%C3%A1ginas-%C3%B3ptimo?node-id=0%3A1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


--------------------------------



  
## Levantar el cliente de angular Usando Docker

1. Clonar el repositorio

2. Debes contruir la imagen, para ello dirígete a la carpeta raiz del proyecto y allí escribe:
```
docker-compose build
```
3. Esta imagen no se han isntalado aún las dependenias, para instalarlas introduce el comando:
```
docker-compose run client-angular npm install --yes
```
4. Ahora si simplementee puedes escribir el siguiente comando para levantar el proyecto
```
docker-compose up
```

Nota: Para detener el cliente presiona las teclas `Ctrl+C`


