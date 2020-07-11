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

  pages = [];
  numberFrames = 0;
  isClicked = new BehaviorSubject<boolean>(false);
  customClicked = this.isClicked.asObservable();

  constructor() { }

  optimalAlgorithm(numberFrames: number, referenceList: any) {
    for (let i = 0; i < numberFrames; i++) {
      let frames = Array(referenceList.length);
      this.pages.push(frames);
    }

    for (let i = 0; i < referenceList.length; i++) {
      if (this.isReferenced(i, referenceList, this.pages)) {

      } else {
        for (let j = 0; j < numberFrames; j++) {
          if (this.pages[j][i] === undefined) {
            this.pages[j][i] = referenceList[i];
            break;
          } else {
            if (j === numberFrames - 1) {
              const index = this.getIndex(i, referenceList, this.pages);
              this.pages[index][i] = referenceList[i];
              break;
            }
          }
        }
      }
      for (let k = 0; k < numberFrames; k++) {
        if (i < referenceList.length - 1) {
          this.pages[k][i + 1] = this.pages[k][i];
        }
      }

      this.isClicked.next(true);
    }
  }

  isReferenced(i: number, referenceList: any, page: Array<any>) {
    if (i < referenceList.length) {
      for (let j = 0; j < page.length; j++) {
        if (page[j][i] === referenceList[i]) {
          return true;
        }
      }
      return false;
    }
  }

  getIndex(start: number, referenceList: any, page: Array<any>) {

    let numbers = Array(page.length);
    let indexes = Array(numbers.length);

    for (let i = 0; i < page.length; i++) {
      for (let number of page[i][start]) {
        numbers[i] = number;
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      for (let j = start; j < referenceList.length; j++) {
        if (referenceList[j] === numbers[i]) {
          indexes[i] = j;
          break;
        } else {
          indexes[i] = 100;           // Pensar en la condicion del FIFO
        }
      }
    }

    const max = Math.max(...indexes);
    const index = indexes.indexOf(max);



    console.log(indexes);
    console.log(index);
    console.log('______________');
    return index;

  }

  getPages(): Array<any> {
    return this.pages;
  }
  getNumberFrames() {
    return this.numberFrames;
  }

}
