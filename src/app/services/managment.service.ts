import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { AllManagmentToday } from '../models/managment';

@Injectable({
  providedIn: 'root'
})
export class ManagmentService {

  constructor(private http: HttpClient, private global: GlobalService) { }


  private getToken(): string | null {
    if (typeof window !== 'undefined') {  // Aseguramos que esto solo suceda en el cliente
      return localStorage.getItem('token');
    }
    return null;  // En el servidor, simplemente no hay token
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
}
