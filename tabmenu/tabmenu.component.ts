import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {

  constructor() {
    this.tempMenu = this.menu[0]
  }

  menu = ['Active', 'Link', 'Service'];


  tempMenu: string;


  enterMenu(event: string) {
    this.tempMenu = event;
  }

  showMenu(status) {
    return status === this.tempMenu ? true : false;
  }

  classMenu(status) {
    return {
      'active': status === this.tempMenu ? true : false,
      'nav-link': true
    }
  }

  ngOnInit() {
  }

}
