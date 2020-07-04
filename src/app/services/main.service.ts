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
  isClicked = new BehaviorSubject <boolean> (false);
  customClicked = this.isClicked.asObservable();

  constructor() { }

  algorithmOptimal(numberFrames: number, referenceList: any) {
    for (let i = 0; i < numberFrames; i++) {
      let frames = Array(referenceList.length);
      this.pages.push(frames);
    }

    this.isClicked.next(true);
  }

  getPages(): Array <any> {
    return this.pages;
  }

}
