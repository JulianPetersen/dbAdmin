import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CashregisterService } from '../../services/cashregister.service';

@Component({
  selector: 'app-cashregister-history',
  templateUrl: './cashregister-history.component.html',
  styleUrl: './cashregister-history.component.scss'
})
export class CashregisterHistoryComponent {
  
  cashSelected: any;
  movementsSelecteds:any;

  constructor(
    private global: GlobalService,
    private cashRegister: CashregisterService
  ) {}

  buscar(selectedDate: Date) {
    if (!selectedDate) return;

    const formatted = this.formatDateToYYYYMMDD(selectedDate);

    this.cashRegister.getCashRegisterByDate(formatted)
      .subscribe({
        next: (res:any) => {
          this.cashSelected = res
          this.movementsSelecteds = res.movements
          console.log(this.movementsSelecteds)
        },
        error: (err) => console.log(err)
      });
  }

  formatDateToYYYYMMDD(date: Date): string {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
