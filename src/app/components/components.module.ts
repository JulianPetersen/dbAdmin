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
import { MatMenuModule } from '@angular/material/menu';
import { LoadSpinnerComponent } from './ui/load-spinner/load-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { InputDialogComponent } from './ui/input-dialog/input-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuLateralComponent,
    AlertComponent,
    DeleteDialogComponent,
    ToolbarComponent,
    LoadSpinnerComponent,
    InputDialogComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    MenuLateralComponent,
    DeleteDialogComponent,
    ToolbarComponent,
    LoadSpinnerComponent,
    InputDialogComponent,

  ]
})
export class ComponentsModule { }
