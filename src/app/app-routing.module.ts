import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : "employee" ,
  children:[
    { path : "emp-details" , component : EmployeeDetailsComponent},
    { path : "workspace" , component : WorkspaceComponent} ,
  ]
},
{ path : "employee-comp" , component: EmployeeComponent} ,
{ path : "login" , component : LoginComponent , canActivate : [AuthGuard]},
{ path : "register" , component : RegisterComponent , canActivate: [ AuthGuard]},
{ path:'lazy' , loadChildren: ()=> import('./orders/orders.module').then(m=>m.OrdersModule)}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const importComponents =  [EmployeeComponent , WorkspaceComponent , EmployeeDetailsComponent]