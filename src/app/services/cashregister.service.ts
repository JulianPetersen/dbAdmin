import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class CashregisterService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  
  private getToken(): string | null {
    if (typeof window !== 'undefined') {  // Aseguramos que esto solo suceda en el cliente
      return localStorage.getItem('token');
    }
    return null;  // En el servidor, simplemente no hay token
  }


    getCashRegisterToday() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.get(`${this.global.URL}/cashregister/today`, { headers: headers })
  }
}
