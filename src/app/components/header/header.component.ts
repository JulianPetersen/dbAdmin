import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(public menuService:MenuService){

  }

  openMenu(){
    if(this.menuService.menuView == false){
      this.menuService.menuView = true;
    }else{
      this.menuService.menuView = false;
    }
  }
}
