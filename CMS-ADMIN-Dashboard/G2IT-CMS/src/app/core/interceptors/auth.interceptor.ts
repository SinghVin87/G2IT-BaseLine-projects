import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private dialog: MatDialog
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authService.getCurrentUser();

        if (user && user.token) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });

            return next.handle(cloned).pipe(
                tap({
                    error: (err: any) => {
                        if (err instanceof HttpErrorResponse && err.status === 401) {
                            this.dialog.closeAll();
                            this.router.navigate(['/auth/login']);
                        }
                    }
                })
            );
        } else {
            return next.handle(req);
        }
    }
}
