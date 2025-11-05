import { Component } from '@angular/core';
import { User } from '../../models/user';
import { GlobalService } from '../../services/global.service';
import { ManagmentService } from '../../services/managment.service';
import { error } from 'node:console';
import { of, switchMap } from 'rxjs';
import { AllManagmentToday, Managment } from '../../models/managment';
import { CashregisterService } from '../../services/cashregister.service';
import { Cashregister } from '../../models/cashregister';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  menuView: boolean = false;
  logedUser: User

  existingManagment: boolean;
  userByActiveManagment:User;
  allManagmentToday:AllManagmentToday

  constructor(private global: GlobalService, private managment: ManagmentService, private cashRegister:CashregisterService) {

  }


  ngOnInit() {
    this.getUserData()
    this.getManagmentToday()
    this.getCashRegisterToday()
  }


  getCashRegisterToday(){
    this.cashRegister.getCashRegisterToday()
      .subscribe({
        next: ((res) =>{
          console.log('HAY CAJA DIARIA',res);
        }),
        error: (err) =>{
          console.log(err)
        }
      })
  }

  getUserData() {
    this.logedUser = this.global.getDataUser()
    console.log('userData desde toolbar', this.logedUser)
  }


  getManagmentToday() {
    this.managment.getManagmentToday()
      .subscribe({
        next: ((res: Managment) => {
          console.log('respuesta de managment today', res)
          if (res.activeManagment == null) {
            this.existingManagment = false;
            this.userByActiveManagment = res.userId
            this.getAllManagmentToday()
          }
          if(res.active){
            this.existingManagment = true;
            console.log(res.active)
          }
        }),
        error: ((err) => {
          console.log(err.error.message)

        })
      })
  }


  async getManagmentStatusToday() {
    this.managment.getManagmentStatusToday()
      .subscribe({
        next: ((res: Managment) => {
          console.log('Managment TODAY', res)
        }),
        error: (err) =>
          console.log(err)
      })
  }


 createManagment() {
  this.global.showAlertWhitFunction(
    'ATENCIÓN',
    'Vas a crear una nueva gestión. ¿Estás seguro?',
    () => {
      this.cashRegister.getCashRegisterToday().pipe(

        // 🔹 Paso 1: verificar si existe la caja
        switchMap((res: any) => {
          let openingAmount = 0;

          if (res.cod === 'ERROR') {
            // No existe caja → pedimos monto inicial
            const input = prompt('Ingrese el monto inicial de la caja:');
            const monto = Number(input);
            if (isNaN(monto) || monto < 0) {
              alert('Monto inválido. No se creó la gestión.');
              return of(null); // Cancelamos el flujo
            }
            openingAmount = monto;
          } else {
            console.log('Caja existente:', res.cashRegister);
          }

          // Seguimos al paso 2 → chequeo de gestión
          return this.managment.getManagmentStatusToday().pipe(
            switchMap((status: any) => {
              if (!status?.activeManagment) {
                // Pasamos el monto si hace falta crear caja
                return this.managment.createManagment({ openingAmount });
              } else {
                console.log('Ya existe una gestión activa:', status);
                return of(null);
              }
            })
          );
        })

      ).subscribe({
        next: (result:any) => {
          if (result) {
            console.log('✅ Gestión creada:', result);
            alert(result.message || 'Gestión iniciada correctamente.');
          }
          this.getManagmentToday();
        },
        error: (err) => {
          console.error('❌ Error:', err);
          alert(err.error?.message || 'Error inesperado.');
        },
      });
    }
  );
}



closeManagment(){

  this.global.showAlertWhitFunction('ATENCION', 'esta seguro que quiere cerrar su gestion?', ()=>{
    this.managment.closeManagment()
    .subscribe({
      next : ((res) => {
        console.log(res);
        this.managment.getManagmentToday();
      }),
      error : (err) => {
        console.log(err)
      }
    })
  } )

  
}

getAllManagmentToday(){
  this.managment.getAllManagmentToday()
    .subscribe({
      next: ((res:AllManagmentToday) => {
        console.log('TODAS LAS GESTIONES DEL DIA DE HOY',res);
        this.allManagmentToday = res;
      }),
      error: ((err) => {
        console.log(err);
      })
    })
}
}
