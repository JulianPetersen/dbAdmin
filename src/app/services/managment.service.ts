import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { AllManagmentToday } from '../models/managment';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagmentService {

  constructor(private http: HttpClient, private global: GlobalService,@Inject(PLATFORM_ID) private platformId: Object) { }

     private managmentAddedSource = new Subject<void>();
     managmentAdded$ = this.managmentAddedSource.asObservable(); // <-- observable público

  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  createManagment(data?: { openingAmount?: number }) {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'x-access-token': token || '',
    });
    return this.http.post(`${this.global.URL}/managment`, data || {}, { headers });
  }


  getManagmentToday() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.get(`${this.global.URL}/managment/get-managment-today`, { headers: headers })
  }


    getAllManagmentToday() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.get<AllManagmentToday>(`${this.global.URL}/managment/get-all-managment-today`, { headers: headers })
  }


  getManagmentStatusToday() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.get(`${this.global.URL}/managment/get-managment-status`, { headers: headers })
  }


  closeManagment() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })

    return this.http.put(`${this.global.URL}/managment/get-managment-status`,{} ,{ headers: headers })
  }

    notifyManagmentAdded() {
    this.managmentAddedSource.next();
  }
}
