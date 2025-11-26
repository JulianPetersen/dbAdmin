import { Component } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';
import { ManagmentService } from '../../../../services/managment.service';
import { CashregisterService } from '../../../../services/cashregister.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listed-managment',
  templateUrl: './listed-managment.component.html',
  styleUrl: './listed-managment.component.scss'
})
export class ListedManagmentComponent {

  displayedColumns: string[] = ['user', 'startTime', 'endTime', 'totalHours'];
  dataSource: any[] = [];
  private subscription: Subscription;

  constructor(private global: GlobalService, private managment: ManagmentService, private cashRegister: CashregisterService){

  }


  ngOnInit(){
    this.getAllmanagmentToday()

        this.subscription = this.managment.managmentAdded$.subscribe(() => {
      this.getAllmanagmentToday();
    });
  }

  getAllmanagmentToday() {
    this.managment.getAllManagmentToday().subscribe({
      next: (res: any) => {
        console.log('todos los managment de hoy', res);
        this.dataSource = res.managments; // asignamos el array de la respuesta
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Argentina/Buenos_Aires'
  });
}

  formatTotalHours(decimalHours: number): string {
  if (!decimalHours && decimalHours !== 0) return '-';
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);
  const paddedMinutes = minutes.toString().padStart(2, '0');
  return `${hours}:${paddedMinutes} hs`;
}
}
