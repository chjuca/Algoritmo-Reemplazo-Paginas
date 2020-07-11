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
              this.pages[j][i] = referenceList[i];
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
    let index = 0;
    if (start < referenceList.length) {
      for (let i = start; i < referenceList.length; i++) {
        for (let j = 0; j < page.length; j++) {
          if (page[j][i] === referenceList[i]) {
            if (j > index) {
              index = j;
            }
          }
        }
      }
    }
    return index;
  }


  // for (let number of page) {
  //   if (number === referenceList[i]) {
  //     return true;
  //   }
  // }
  // return false;



  // optimalAlgorithm(numberFrames: number, referenceList: any) {

  //   for (let i = 0; i < numberFrames; i++) {
  //     var frames = [];
  //     let tmp_numberFrames = 0
  //     if(i == 0){
  //       frames.push(referenceList[i]);
  //     }else{
  //       while(tmp_numberFrames <= i){
  //         frames.push(referenceList[tmp_numberFrames]);
  //         tmp_numberFrames ++ ;
  //       }
  //     }
  //     this.pages.push(frames);
  //     //this.pages.push(frames);
  //   }
  //   this.numberFrames = numberFrames;
  //   this.isClicked.next(true);
  // }

  getPages(): Array<any> {
    return this.pages;
  }
  getNumberFrames() {
    return this.numberFrames;
  }

}
