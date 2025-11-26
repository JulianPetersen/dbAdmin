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
  constructor() {

  }


  ngOnInit() {
  }





}
