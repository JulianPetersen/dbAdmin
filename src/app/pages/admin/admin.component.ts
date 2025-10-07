import { Component } from '@angular/core';
import { User } from '../../models/user';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  menuView:boolean = false;
  logedUser:User
  

  constructor(private global:GlobalService){

  }


  ngOnInit(){
    this.getUserData()
  }

  getUserData(){
   this.logedUser = this.global.getDataUser()
   console.log('userData desde toolbar', this.logedUser)
  }
}
