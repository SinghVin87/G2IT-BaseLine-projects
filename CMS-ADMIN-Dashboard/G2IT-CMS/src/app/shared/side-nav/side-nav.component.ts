import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/core/data/menu-data';
import { MenuItem } from 'src/app/utils/menu-Item';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  menuItems: MenuItem[] = MENU;
  ngOnInit(): void {
  }

}
