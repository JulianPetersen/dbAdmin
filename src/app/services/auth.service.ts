import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router, private global:GlobalService) { }

  register(user:User){
    return this.http.post(`${this.global.URL}/auth/signup`, user)
  }


  login(user:User){
    return this.http.post(`${this.global.URL}/auth/signIn`, user)
  }


  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('roles');
    this.router.navigate(['/login'])
  }


}