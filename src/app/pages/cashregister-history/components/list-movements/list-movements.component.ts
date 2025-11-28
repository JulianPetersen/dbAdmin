import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-movements',
  templateUrl: './list-movements.component.html',
  styleUrl: './list-movements.component.scss'
})
export class ListMovementsComponent {
  
  displayedColumns: string[] = [
    'concept', 'type', 'methodOfPayment', 
    'amount', 'user', 'createdAt'
  ];

  dataSource: any[] = [];

  @Input()
  set movementsSelecteds(value: any) {
    if (value) {
      this.dataSource = value;
      console.log("DataSource actualizado:", this.dataSource);
    }
  }
}
