import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

/**
 * Component when we will create the matriz graph
 */
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  pages = [];
  auxPages = [];

  constructor(public mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.isClicked.subscribe(isClicked => this.pages = this.mainService.getPages());
    this.mainService.isClicked.subscribe(isClicked => this.auxPages = this.mainService.getAuxPages());
  }
}
