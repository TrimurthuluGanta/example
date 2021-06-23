import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AdminAuthenticationGuard } from './guards/admin-authentication.guard';
import { CustomerAuthenticationGuard } from './guards/customer-authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,
  canActivate:[AdminAuthenticationGuard]
  },
  {path:'customer',component:CustomerComponent,
  canActivate:[CustomerAuthenticationGuard]
  },
  {path:'signin',component:UserComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }