import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ComponentsModule } from './components/components.module';

import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { QuillModule } from 'ngx-quill';
import { MatButtonModule } from '@angular/material/button';

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatChipsModule} from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RouterModule } from '@angular/router';
import { ActivedManagmentComponent } from './pages/admin/components/actived-managment/actived-managment.component';
import { ListedManagmentComponent } from './pages/admin/components/listed-managment/listed-managment.component';
import { AdminCajaComponent } from './pages/admin-caja/admin-caja.component';
import { CashRegisterComponent } from './pages/admin-caja/components/cash-register/cash-register.component';
import { CashMovementsComponent } from './pages/admin-caja/components/cash-movements/cash-movements.component';
import { CashregisterHistoryComponent } from './pages/cashregister-history/cashregister-history.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CashRegisterClosedComponent } from './pages/admin-caja/components/cash-register-closed/cash-register-closed.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CalendarSelectorComponent } from './pages/cashregister-history/components/calendar-selector/calendar-selector.component';
import { CashDetailsComponent } from './pages/cashregister-history/components/cash-details/cash-details.component';
import { ListMovementsComponent } from './pages/cashregister-history/components/list-movements/list-movements.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    ActivedManagmentComponent,
    ListedManagmentComponent,
    AdminCajaComponent,
    CashRegisterComponent,
    CashMovementsComponent,
    CashregisterHistoryComponent,
    CashRegisterClosedComponent,
    CalendarSelectorComponent,
    CashDetailsComponent,
    ListMovementsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    QuillModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatDatepickerModule,
    MatDialogModule

    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()), 
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
