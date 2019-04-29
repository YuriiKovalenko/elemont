import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-main-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  constructor(public scroller: ScrollService) { }

  ngOnInit() {
  }


}
