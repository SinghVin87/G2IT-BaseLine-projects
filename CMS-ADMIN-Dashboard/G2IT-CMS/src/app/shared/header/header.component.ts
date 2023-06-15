import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sidenavRef!: MatSidenav;
  userName: string = "";
  constructor(private authService: AuthenticationService,) {
   }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
        this.userName = user.fullName;
  }

}
