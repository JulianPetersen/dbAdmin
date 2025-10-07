import { Component, Inject } from '@angular/core';

import { GlobalService } from '../../services/global.service';


import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  userData:User;

  constructor(
              public global:GlobalService,
              private dialog:MatDialog,
              private auth:AuthService){

  }

  ngOnInit(){
    this.getUserData()
  }

  getUserData(){
   this.userData = this.global.getDataUser()
   console.log('userData desde toolbar', this.userData)
  }

  logOut(){
    this.global.showAlertWhitFunction('ATENCION', '¿Estas seguro de cerrar sesion?', () => {
      this.auth.logOut();
    })
  }
}
