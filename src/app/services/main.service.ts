import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


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
  isClicked = new BehaviorSubject <boolean> (false);
  customClicked = this.isClicked.asObservable();

  constructor() { }
  /*
  optimalAlgorithm(numberFrames: number, referenceList: any) {
    for (let i = 0; i < numberFrames; i++) {
      let frames = Array(referenceList.length);
      this.pages.push(frames);
    }

    this.isClicked.next(true);
  }
  */
  optimalAlgorithm(numberFrames: number, referenceList: any) {
    
    for (let i = 0; i < numberFrames; i++) {
      var frames = [];
      let tmp_numberFrames = 0
      if(i == 0){
        frames.push(referenceList[i]);
      }else{
        while(tmp_numberFrames <= i){
          frames.push(referenceList[tmp_numberFrames]);
          tmp_numberFrames ++ ;
        }
      }
      this.pages.push(frames);
      //this.pages.push(frames);
    }
    this.numberFrames = numberFrames;
    this.isClicked.next(true);
  }

  getPages(): Array <any> {
    return this.pages;
  }
  getNumberFrames(){
    return this.numberFrames;
  }

}
