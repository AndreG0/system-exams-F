import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private logService:LogService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.logService.isLoggedIn() && this.logService.getUserRole() == 'ADMIN'){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}
