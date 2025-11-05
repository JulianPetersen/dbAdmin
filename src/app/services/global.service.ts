import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertComponent } from '../components/ui/alert/alert.component';
import { User } from '../models/user';
import { InputDialogComponent } from '../components/ui/input-dialog/input-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  logedUser:User
  
  constructor(public dialog: MatDialog) {

   }


  URL: string = "http://localhost:5000/api"


  showAlert(title: string, content: string) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: { title, content },
      width: '250px',
    });
  }

  showAlertWhitFunction(title: string, content: string, afterCloseCallback?: () => void) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: { title, content },
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe((res) => {
      if (res == true) {
        afterCloseCallback();
        dialogRef.close()
      }
    });
  }

  showAlertWithInput(
    title: string,
    message: string,
    placeholder: string
  ): Observable<string | null> {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '400px',
      data: { title, message, placeholder }
    });

    return dialogRef.afterClosed(); // 👉 devuelve un Observable<string | null>
  }

  // isUserAdmin() {
  //   const roles = JSON.parse(localStorage.getItem('roles') || '[]');
  //   // Verificar si el usuario tiene rol de "admin" o "moderator"
  //   if (roles.includes('admin')) {
  //     return true;
  //   }
  //   return false;
  // }

  getDataUser(){
    const userData = JSON.parse(localStorage.getItem('dataUser'))
    return userData
  }

  isUserAdmin() {
    const user = JSON.parse(localStorage.getItem('dataUser') || '{}');
    
    if (!user.roles || !Array.isArray(user.roles)) {
      return false;
    }
  
    // Verificar si alguno de los roles tiene name === 'admin'
    return user.roles.some((role: any) => role.name === 'admin');
  }
}
