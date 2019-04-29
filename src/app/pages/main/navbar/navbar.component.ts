import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  transparent: boolean;

  constructor(public scroller: ScrollService) {}

  ngOnInit() {
    const _this = this;
    window.onscroll = function() {
      _this.transparent =
        window.scrollY > window.innerHeight / 2.6 ? false : true;
    };
    this.transparent = window.scrollY > window.innerHeight / 2.6 ? false : true;
  }

  checkScroll() {}
}
