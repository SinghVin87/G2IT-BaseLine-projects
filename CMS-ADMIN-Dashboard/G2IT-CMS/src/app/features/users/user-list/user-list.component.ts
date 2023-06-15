import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private logger: NGXLogger,
    private toastr: ToastrService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('G2IT-CMS - Users');
    this.logger.log('Users loaded');
    this.toastr.success('Users loaded')
  }
}
