import { Component, OnInit } from '@angular/core';

/**
 * We are not using this component
 *
 * @deprecated
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reference: number;
  referenceList = [];

  constructor() { }

  ngOnInit() {
  }

  addReference(reference: number) {
    this.referenceList.push(reference);
    console.log(this.referenceList);
  }

}
