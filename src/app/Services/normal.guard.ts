import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { LogService } from './log.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {

  constructor(private logService:LogService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.logService.isLoggedIn() && this.logService.getUserRole() == 'USER'){
        return true;
      }

      this.router.navigate(['login']);
      return false;
  }

}

