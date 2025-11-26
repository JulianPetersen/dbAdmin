import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CashMovementsService {

  constructor(private http: HttpClient, private global: GlobalService, @Inject(PLATFORM_ID) private platformId: Object) { }

  private movementAddedSource = new Subject<void>();
  movementAdded$ = this.movementAddedSource.asObservable(); // <-- observable público

  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  getcashMovementsToday() {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.get(`${this.global.URL}/cashMovement/today`, { headers: headers })
  }


  createCashMovementTOday(movement: any) {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
    return this.http.post(`${this.global.URL}/cashMovement`, movement, { headers: headers })
  }

  notifyMovementAdded() {
    this.movementAddedSource.next();
  }


  deleteCashMovement(id:string) {
    const token = this.getToken();  // Obtenemos el token de forma segura
    let headers = new HttpHeaders({
      'x-access-token': token || ''  // Si el token no existe, mandamos un string vacío
    })
     return this.http.delete(`${this.global.URL}/cashMovement/${id}`, { headers: headers })
  }

}
