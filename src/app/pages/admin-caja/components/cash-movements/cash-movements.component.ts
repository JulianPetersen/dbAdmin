import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../../../services/global.service';
import { CashMovementsService } from '../../../../services/cash-movements.service';
import { AlertComponent } from '../../../../components/ui/alert/alert.component';


@Component({
  selector: 'app-cash-movements',
  templateUrl: './cash-movements.component.html',
  styleUrls: ['./cash-movements.component.scss']
})
export class CashMovementsComponent implements OnInit {
  displayedColumns: string[] = ['concept', 'type', 'methodOfPayment', 'amount', 'user', 'createdAt', 'actions'];
  dataSource: any[] = [];
  loading = false;

  constructor(
    private global: GlobalService,
    private dialog: MatDialog,
    private cashMovement:CashMovementsService
  ) {}

  ngOnInit(): void {
    this.loadMovements();

    this.cashMovement.movementAdded$.subscribe(() => {
    console.log('Nuevo movimiento detectado, recargando lista...');
    this.loadMovements();
  });
  }

  loadMovements() {
    this.loading = true;
    this.cashMovement.getcashMovementsToday().subscribe({
      next: (res: any) => {
        this.dataSource = res.movements || [];
        this.loading = false;
        console.log('los movimientos son', res)
      },
      error: (err) => {
        console.error('Error cargando movimientos', err);
        this.loading = false;
      }
    });
  }

  deleteMovement(id: string) {
    console.log(id)
    this.global.showAlertWhitFunction('ATENCION', 'Está seguro que quiere eliminar el movimiento de caja?', ()=>{
        this.cashMovement.deleteCashMovement(id)
          .subscribe({
            next: ((res) => {
              console.log(res)
              this.cashMovement.notifyMovementAdded();
              this.loadMovements();
            }),
            error : (err) => {
              console.log(err)
            }
          })
    })

  }
}
