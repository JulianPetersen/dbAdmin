import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-cashregister-history',
  templateUrl: './cashregister-history.component.html',
  styleUrl: './cashregister-history.component.scss'
})
export class CashregisterHistoryComponent {
  
  selectedDate:Date

  constructor(private global:GlobalService){

  }

  ngOnInit(){
    
  }
  

 formatDateToYYYYMMDD(date: Date): string {
  if (!date) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

buscar() {
  const formatted = this.formatDateToYYYYMMDD(this.selectedDate);
  console.log("Enviando al backend:", formatted);


}
}
