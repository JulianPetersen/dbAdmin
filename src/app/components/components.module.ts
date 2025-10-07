import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AlertComponent } from './ui/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './ui/delete-dialog/delete-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { LoadSpinnerComponent } from './ui/load-spinner/load-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuLateralComponent,
    AlertComponent,
    DeleteDialogComponent,
    ToolbarComponent,
    LoadSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MenuLateralComponent,
    DeleteDialogComponent,
    ToolbarComponent,
    LoadSpinnerComponent
  ]
})
export class ComponentsModule { }
