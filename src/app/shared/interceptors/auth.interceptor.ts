import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('api_token');
    const cloned = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(cloned).pipe(
      catchError((err: HttpErrorResponse) => {
        this.snackBar.open('Back-END ошибка ' + err.status, 'OK', {
          duration: 1000
        });
        return throwError(err);
      })
    );
  }
}
