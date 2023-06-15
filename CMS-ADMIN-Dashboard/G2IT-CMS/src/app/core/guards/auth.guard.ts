import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as moment from 'moment';

import { AuthenticationService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private toastr: ToastrService,
        private authService: AuthenticationService) { }

    canActivate() {
        const user = this.authService.getCurrentUser();

        if (user && user.expiration) {

            if (moment() < moment(user.expiration)) {
                return true;
            } else {
                this.toastr.error('Your session has expired');
                this.router.navigate(['auth/login']);
                return false;
            }
        }

        this.router.navigate(['auth/login']);
        return false;
    }
}
