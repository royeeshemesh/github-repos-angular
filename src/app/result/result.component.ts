import {Component, Input, OnInit} from '@angular/core';
import {GithubService} from '../github.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
