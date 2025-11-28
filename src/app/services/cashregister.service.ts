import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CashregisterService {

  constructor(private http: HttpClient, private global: GlobalService, @Inject(PLATFORM_ID) private platformId: Object) { }


  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  getCashRegisterToday() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.get(`${this.global.URL}/cashregister/today`, { headers: headers })
  }

    getCashRegisterByDate(date:string) {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    const params = new HttpParams().set('date', date);
    return this.http.get(`${this.global.URL}/cashregister/by-date`, { headers,params })
  }


  closeCashRegister(date: string) {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    const params = new HttpParams().set('date', date);

    return this.http.put(`${this.global.URL}/cashregister/close`,{},{ headers, params });
  }
}
