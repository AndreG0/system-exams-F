import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  token : any;

constructor(private logService:LogService){

  }

intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const token = this.logService.getToken();
    if(token != null){
      authRequest = authRequest.clone({
        setHeaders : {Authorization: `Bearer ${token}` }
      })
    }
    return next.handle(authRequest);
  }

}

export const AuthInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true

  }

]
