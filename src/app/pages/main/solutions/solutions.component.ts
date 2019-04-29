import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.less']
})
export class SolutionsComponent implements OnInit {
  current: string;
  constructor() { }

  ngOnInit() {
    this.setCurrent('cctv');
  }

  setCurrent(value) {
    this.current = value;
  }

}
