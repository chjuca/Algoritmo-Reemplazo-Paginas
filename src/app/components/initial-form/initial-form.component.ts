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
  
  constructor(public mainService: MainService) { }

  ngOnInit() {
  }
  
  addReference(reference: string) {
    this.referenceList.push(reference);
  }
  

  optimalAlgorithm(numberFrames: number) {
    this.mainService.optimalAlgorithm(numberFrames, this.referenceList);
    this.referenceList = [];
    this.frames = null;
  }
  
  validateReference(reference: string): boolean{
    if(reference==" "|| reference == '"'){
      return true;
    }
    return false;
  }
  

  
}
