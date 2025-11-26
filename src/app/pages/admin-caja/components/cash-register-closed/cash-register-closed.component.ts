import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cash-register-closed',
  templateUrl: './cash-register-closed.component.html',
  styleUrl: './cash-register-closed.component.scss'
})
export class CashRegisterClosedComponent {



  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string,content:any }){

  }



  ngOnInit(){
    console.log("data recibida:", this.data.content);
  }
}
