import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    // tslint:disable-next-line:rxjs-finnish no-any
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle (req).pipe (
            // tslint:disable-next-line:rxjs-throw-error
            catchError((err: HttpErrorResponse) => throwError(err)),
      );
    }
}
