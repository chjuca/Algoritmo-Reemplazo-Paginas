import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

/**
 * Component that handles the form when we request the data from the user
 */
@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

  reference: number;
  frames: number;
  referenceList = [];
  // referenceList = [
  //   '7', '0', '1', '2', '0',
  //   '3', '0', '4', '2', '3',
  //   '0', '3', '2', '1', '2',
  //   '0', '1', '7', '0', '1'
  // ]

  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

  addReference(reference: number) {
    this.referenceList.push(reference);
  }


  optimalAlgorithm(numberFrames: number) {
    console.log(this.referenceList);
    this.mainService.optimalAlgorithm(numberFrames, this.referenceList);
  }



}
