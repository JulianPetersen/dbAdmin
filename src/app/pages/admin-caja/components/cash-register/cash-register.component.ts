import { Component, OnInit } from '@angular/core';
import { CashregisterService } from '../../../../services/cashregister.service';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../../../services/global.service';
import { InputDialogComponent } from '../../../../components/ui/input-dialog/input-dialog.component';
import { CashMovementsService } from '../../../../services/cash-movements.service';
import { CashRegisterClosedComponent } from '../cash-register-closed/cash-register-closed.component';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrl: './cash-register.component.scss'
})
export class CashRegisterComponent {
  cashRegister: any = null;            // caja del día (objeto)
  historicalRegisters: any[] = [];     // si querés mostrar varias (opcional)

  constructor(
    private cashService: CashregisterService,
    private dialog: MatDialog,
    private global: GlobalService,
    private cashMovementService: CashMovementsService,

  ) { }

ngOnInit() {
  this.loadToday();

  // 👇 Agregá esto
  this.cashMovementService.movementAdded$.subscribe(() => {
    console.log('Detectado nuevo movimiento — recargando monto de caja...');
    this.loadToday();
  });
}

  loadToday() {
    this.cashService.getCashRegisterToday().subscribe({
      next: (res: any) => {
        // según tus respuestas: { cod:'OK', cashRegister: {...} } o { cod:'ERROR' }
        if (res?.cod === 'OK' && res.cashRegister) {
          this.cashRegister = res.cashRegister;
        } else {
          this.cashRegister = null;
        }
      },
      error: (err) => {
        console.error('Error al cargar caja:', err);
        this.cashRegister = null;
      }
    });
  }

  formatDate(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
  }

  formatDateTime(dateStr: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
  }


  openMovementDialog(type: 'ingreso' | 'egreso') {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '400px',
      data: {
        title: `Nuevo ${type}`,
        fields: [
          { label: 'Concepto', key: 'concept', type: 'text', required: true },
          { label: 'Monto', key: 'amount', type: 'number', required: true },
          {
            label: 'Método de pago',
            key: 'methodOfPayment',
            type: 'select',
            options: [
              { label: 'Efectivo', value: 'efectivo' },
              { label: 'Transferencia', value: 'transferencia' },
              { label: 'Tarjeta', value: 'tarjeta' }
            ],
            required: true
          }
        ]
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.global.showLoader()
      if (result) {
        const movementData = { ...result, type };
        console.log('momenentData', movementData)

        this.cashMovementService.createCashMovementTOday(movementData)
          .subscribe({
            next: ((res: any) => {
              console.log('movimiento creado con exito', res);
              this.cashMovementService.notifyMovementAdded()
              this.loadToday();
              this.global.hideLoader()
            }),
            error: (err => {
              console.log(err)
              this.global.showAlert('ERROR',err.error.message)
              this.global.hideLoader()
            })
          })
        this.loadToday()
      }
    });
  }


  closeCashRegister() {
    this.global.showAlertWhitFunction('ATENCION', 'estas seguro que desea cerrar la caja de hoy', () => {
      const date = new Date()
      const formatDate = this.global.formatDateToYYYYMMDD(date)
      console.log('La fecha de hoy es', formatDate)

      this.cashService.closeCashRegister(formatDate)
        .subscribe({
          next: (res:any) => {
            console.log(res);
            this.loadToday()
            this.ShowALertClosedCashRegister(res.cierre);
             
          },
          error: err => {
            console.log(err)
          }
        })

    })

  }


  ShowALertClosedCashRegister(content:any){
      const dialogRef = this.dialog.open(CashRegisterClosedComponent, {
      width: '400px',
      data: {
        title: `Resumen de Caja cerrada`,
        content:content
      }
    });
    
  }

}
