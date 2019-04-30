import { Component, OnInit, Inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  transparent: boolean;

  constructor(
    public scroller: ScrollService,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.window.onscroll = () => {
      this.transparent =
        this.window.scrollY > this.window.innerHeight / 2.6 ? false : true;
    };
    this.transparent = this.window.scrollY > this.window.innerHeight / 2.6 ? false : true;
  }

  checkScroll() {}
}
