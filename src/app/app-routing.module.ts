import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';

import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AdminCajaComponent } from './pages/admin-caja/admin-caja.component';
import { CashregisterHistoryComponent } from './pages/cashregister-history/cashregister-history.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"admin", component:AdminComponent, canActivate:[authGuard]},
  {path:"login", component:LoginComponent},
  {path:"admin-caja", component:AdminCajaComponent},
  {path:"cashregister-history", component:CashregisterHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
