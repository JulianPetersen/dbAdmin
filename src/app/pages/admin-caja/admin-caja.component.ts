import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CashregisterService } from '../../services/cashregister.service';
import { CashMovementsService } from '../../services/cash-movements.service';

@Component({
  selector: 'app-admin-caja',
  templateUrl: './admin-caja.component.html',
  styleUrl: './admin-caja.component.scss'
})
export class AdminCajaComponent {


  constructor(private global:GlobalService, private cashMovements:CashMovementsService){}



  ngOnInit(){
   this.getCashMovementToday()
  }


  getCashMovementToday(){
    this.global.showLoader()
    this.cashMovements.getcashMovementsToday()
      .subscribe((res) => {
        this.global.hideLoader()
        console.log(res)
      })
  }

 }
