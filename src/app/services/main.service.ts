import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';


/**
 * Main service for hold the main variables of the app, such as the
 * list of pages, the number of memory frames (marcos), the matriz, etc
 */
@Injectable({
  providedIn: 'root'
})
export class MainService {

  pages: any; 
  auxPages: any;                                   // array que reprecenta la matriz de paginas
  numberFrames = 0;                               // numero de marcos dados por el usuario
  isClicked = new BehaviorSubject<boolean>(false);
  customClicked = this.isClicked.asObservable();      // Observable para detectar cambios en el estado del boton
  errorCounter = 0;
  errors = new BehaviorSubject<number>(0);
  customErrors = this.errors.asObservable();


  constructor() { }

  optimalAlgorithm(numberFrames: number, referenceList: any) {
    this.setAuxPages(referenceList);
    this.pages = [];
    this.errorCounter = 0;
    // ============================================
    for (let i = 0; i < numberFrames; i++) {
      let frames = Array(referenceList.length);  // Creamos la matriz segun el alto y ancho dado por el usuario
      this.pages.push(frames);
    }
    // =============================================

    for (let i = 0; i < referenceList.length; i++) {
      if (this.isReferenced(i, referenceList, this.pages)) {  // validamos si la columna actual ya tiene cargada la referencia 
                                                                    
      } else {
        for (let j = 0; j < numberFrames; j++) {
          if (this.pages[j][i] === undefined) {  // validamos si todos los marcos han sido ocupados
            this.pages[j][i] = referenceList[i];  // si hay un marco libre lo usamos;
            break;
          } else {   // en el caso que no haya marcos libres
            if (j === numberFrames - 1) {
              const index = this.getIndex(i, referenceList, this.pages); // Obtenemos el indice de la pagina a ser remplazada
              this.pages[index][i] = referenceList[i];  // remplazamos la pagina
              break;
            }
          }
        }
        this.errorCounter++;
        this.errors.next(this.errorCounter);   // contamos un error de pagina
      }
      
      // =============================================
      for (let k = 0; k < numberFrames; k++) {
        if (i < referenceList.length - 1) {
          this.pages[k][i + 1] = this.pages[k][i]; // Copiamos el contenido de la pagina en la siguiente
        }
      }
      // ==============================================
      this.isClicked.next(true);   // cambiamos el estado del observable  
    }
    // =============================================
    /*
      * Eliminar marcos de referencia iguales
    */
  
    var aux = 0;
    for (let i = 0; i < referenceList.length; i++){
      var currentReference = '';
      var nextReference = ''
      for (let j = 0; j < numberFrames; j++){

        // Accedemos al marco de pagina donde hubo el ultimo reemplazo.
        if (this.pages[j][i] == null) {
          currentReference += this.pages[j][aux]; // Obtenemos el marco de pagina actual
        } else {
          currentReference += this.pages[j][i]; // Obtenemos el marco de pagina actual
        }
        nextReference += this.pages[j][i + 1]; 
      }

      // Si ambos marcos de pagina son iguales significa que no hubo ningún reemplazo de página.
      if (currentReference == nextReference){
        aux = i; // Obtenemos el indice del ultimo marco de pagina donde hubo un reemplazo de pagina.
        for(let j = 0; j < numberFrames; j++){
          this.pages[j][i + 1] = null; 
        }
      }
    }  
  }
  
  /**
   * Funcion que verifica si una página está dentro de una lista de frames
   * @param i               estado actual
   * @param referenceList   lista de referencia
   * @param page            pagina a validar 
   */
  isReferenced(i: number, referenceList: any, page: Array<any>) {
    if (i < referenceList.length) {
      for (let j = 0; j < page.length; j++) {
        if (page[j][i] === referenceList[i]) {  // verificamos que la referencia, no se encuentra cargada
          return true;
        }
      }
      return false;
    }
  }


  /**
   * Esta funcion retorna el el indice de la página a reeplazar
   * @param start           indice del estado actual de la lista
   * @param referenceList   lista de referencia
   * @param page            página a remplazar
   */
  getIndex(start: number, referenceList: any, page: Array<any>) {

    let numbers = Array(page.length);  // Array que nos ayuda a obtener las referencias de la pagina
    let indexes = Array(numbers.length); // Array que nos ayuda a obtener los indices

    // =====================================
    for (let i = 0; i < page.length; i++) {
      for (let number of page[i][start]) {  // obtenemos los valores de la pagina actual
        numbers[i] = number;
      }
    }
    // ======================================

    // ====================================================
    for (let i = 0; i < numbers.length; i++) {
      for (let j = start; j < referenceList.length; j++) {
        if (referenceList[j] === numbers[i]) { // vemos que referencias seran cargadas en el futuro y cuales seran las proximas
          indexes[i] = j;
          break;
        }
      }
    }
    // ======================================================

    let index = 0;

    // =============
    //    FIFO
    // =============
    // ===========================================================
    for (let i = 0; i < indexes.length; i++) {
      if (indexes[i] === undefined) {
        let count = start;
        while ( this.pages[i][start] === this.pages[i][count] && count > 0 ) {
          count--;
        }
        indexes[i] = count; // identificamos que referencia a estado cargada por mas tiempo
      }
    }
    // =============================================================

    const max = Math.max(...indexes);      // calculamos la posicion maxima en relacion a la lista de referencias
    const min = Math.min(...indexes);      // calculamos la posicion minima en relacion a la lista de referencias
    let indexMin = indexes.indexOf(min);   // obtenemos el indice de la posicion maxima
    let indexMax = indexes.indexOf(max);   // obtenemos el indice de la posicion minima

    if (min > start) { // validamos si hay referencias cargadas que no seran proximamente usadas
      index = indexMax;
    } else {
      index = indexMin;
    }

    return index;  // retornamos el indice calculado

  }
  
  /**
   * Setea una lista a la lista auxiliar
   * @param auxReferenceList 
   */
  setAuxPages(auxReferenceList: any){
    this.auxPages = auxReferenceList;
  }

  getAuxPages(): Array<any> {  // metodo para obtener las paginas
    return this.auxPages;
  }

  getPages(): Array<any> {  // metodo para obtener las paginas
    return this.pages;
  }
  getNumberFrames() {    // metodo para obtener el numero de marcos
    return this.numberFrames;
  }

  getErrors(): number {
    return this.errorCounter;
  }
}