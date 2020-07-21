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
  //   '7', '0', '7', '2', '0',
  //   '3', '0', '4','3', '2',
  //   '0', '3', '2', '1', '2',
  //   '0', '1', '7', '0', '1'
  // ];

  // referenceList = [
  //   '2', '3', '2', '1', '5', '2', '4', '5', '3', '2', '5', '2'
  // ];
  // Agregar Datos manualmente


  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

  addReference(reference: string) {
    this.referenceList.push(reference);
  }

  optimalAlgorithm(numberFrames: number) {
    this.mainService.optimalAlgorithm(numberFrames, this.referenceList);
  }



}
