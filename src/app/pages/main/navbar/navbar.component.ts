import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public scroller: ScrollService) { }

  ngOnInit() {
  }

}
