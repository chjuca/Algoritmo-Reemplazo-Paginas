import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

/**
 * Component for show the result of the proccess such as the number of page erros
 */
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  errors = 0;

  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.mainService.errors.subscribe(errors => this.errors = errors);
  }

}
