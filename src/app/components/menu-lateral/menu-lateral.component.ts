import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {

  constructor(public menuService:MenuService, public global:GlobalService){}

  isadmin:boolean;
  showRecetasSubmenu = false;

  ngOnInit(){
    this.isadmin = this.global.isUserAdmin();
    console.log('el usuario es admin', this.isadmin)
  }


  toggleRecetasSubmenu() {
    this.showRecetasSubmenu = !this.showRecetasSubmenu;
  }
}
