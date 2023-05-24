import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewEmployeeComponent } from './pages/Employee/view-employee.component';
import { CreateEmployeeComponent } from './pages/Employee/create-employee.component';
import { EditEmployeeComponent } from './pages/Employee/edit-employee.component';
import { ViewCustomerComponent } from './pages/Customer/view-customer.component';
import { CreateCustomerComponent } from './pages/Customer/create-customer.component';
import { EditCustomerComponent } from './pages/Customer/edit-customer.component';
import { ViewSaloonComponent } from './pages/saloon/view-saloon.component';
import { AddSaloonComponent } from './pages/saloon/add-saloon.component';
import { EditSaloonComponent } from './pages/saloon/edit-saloon.component';
import { AddAptComponent } from './pages/Appo/add-apt.component';
import { ViewAptComponent } from './pages/Appo/view-apt.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'view-employee',
        component:ViewEmployeeComponent
      },
      {
        path:'create-employee',
        component:CreateEmployeeComponent
      },
      {
        path:'edit-employee/:employeeId',
        component:EditEmployeeComponent
      },
      {
        path:'view-customer',
        component:ViewCustomerComponent
      },
      {
        path:'create-customer',
        component:CreateCustomerComponent
      },
      {
        path:'edit-customer/:customerId',
        component:EditCustomerComponent
      },
      {
        path:'view-saloon',
        component:ViewSaloonComponent
      },
      {
        path:'add-saloon',
        component:AddSaloonComponent
      },
      {
        path:'edit-saloon/:saloonId',
        component:EditSaloonComponent
      },
      {
        path:'add-apt',
        component:AddAptComponent
      },
      {
        path:'view-apt',
        component:ViewAptComponent
      },
      {
        path:'edit-apt/:appointId',
        component:AddAptComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
