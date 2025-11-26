import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertComponent } from '../components/ui/alert/alert.component';
import { User } from '../models/user';
import { InputDialogComponent } from '../components/ui/input-dialog/input-dialog.component';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  logedUser: User

  private _isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();
  constructor(public dialog: MatDialog, @Inject(PLATFORM_ID) private platformId: Object) {

  }


  URL: string = "http://localhost:5000/api"

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

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


  getDataUser(): any {
    if (this.isBrowser()) {
      const userData = localStorage.getItem('dataUser');
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  }

  isUserAdmin(): boolean {
    if (this.isBrowser()) {
      const user = this.getDataUser();
      if (user?.roles && Array.isArray(user.roles)) {
        return user.roles.some((role: any) => role.name === 'admin');
      }
    }
    return false;
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('token');
    }
    return null;
  }


  formatDateToYYYYMMDD(date: Date): string {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }



  showLoader() {
    this._isLoading.next(true);
  }

  hideLoader() {
    this._isLoading.next(false);
  }
}
