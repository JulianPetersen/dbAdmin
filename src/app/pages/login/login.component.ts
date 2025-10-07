import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { loginResponse, User } from '../../models/user';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router,public global:GlobalService) { }

  user:User = {
    email:"",
    password:"",
  }

  errorLogin:string=""


  login(){
    console.log(this.user)
    this.auth.login(this.user)
      .subscribe({
        next: ((res:loginResponse) => {
          console.log(res)
          localStorage.setItem('token',res.token)
          localStorage.setItem('dataUser', JSON.stringify(res.user))
          this.router.navigateByUrl('admin')
        }),
        error: ((err) => {
          this.errorLogin = err.message
        })
      })
  }
}
