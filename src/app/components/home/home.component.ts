import { empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reference: number;
  frames: number;
  referenceList = [];

  constructor() { }

  ngOnInit() {
  }

  addReference(reference: number) {
    this.referenceList.push(reference);
    console.log(this.referenceList);
  }


  algorithmOptimal(numberFrames: number) {
    let pages = [];
    for (let i = 0; i < numberFrames; i++) {
      let frames = Array(this.referenceList.length);
      pages.push(frames);
    }

    console.log(pages);

  }


}
