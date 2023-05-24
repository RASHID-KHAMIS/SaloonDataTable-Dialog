import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { ViewEmployeeComponent } from './pages/Employee/view-employee.component';
import { CreateEmployeeComponent } from './pages/Employee/create-employee.component';
import { EditEmployeeComponent } from './pages/Employee/edit-employee.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { ViewCustomerComponent } from './pages/Customer/view-customer.component';
import { CreateCustomerComponent } from './pages/Customer/create-customer.component';
import { EditCustomerComponent } from './pages/Customer/edit-customer.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { ViewSaloonComponent } from './pages/saloon/view-saloon.component';
import { AddSaloonComponent } from './pages/saloon/add-saloon.component';
import { EditSaloonComponent } from './pages/saloon/edit-saloon.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ViewAptComponent } from './pages/Appo/view-apt.component';
import { EditAptComponent } from './pages/Appo/edit-apt.component';
import { AddAptComponent } from './pages/Appo/add-apt.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewAppComponent } from './pages/Ap/view-app.component';
import { CreateAppComponent } from './pages/Ap/create-app.component';
import { AddAppComponent } from './pages/Ap/add-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    ViewEmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    CardComponent,
    ViewCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ViewSaloonComponent,
    AddSaloonComponent,
    EditSaloonComponent,
    ViewAptComponent,
    EditAptComponent,
    AddAptComponent,
    ViewAppComponent,
    CreateAppComponent,
    AddAppComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
