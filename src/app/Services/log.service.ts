import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http:HttpClient) { }

  //Generate Token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //start session and generate token in the localStorage
  public loginUser(token:any){
    localStorage.getItem(token);
  }
  //Checks the connection
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == null || tokenStr == ''){
      return false;
    }else{
      return true;
    }
  }

  //Close session and remove token
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Get the token from the session
  public getToken(){
    return localStorage.getItem('token');
  }

  //ESTABLECER USUARIO
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //OBTENER USUARIO
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }
}
