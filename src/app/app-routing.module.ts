import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationManagementComponent} from './staff/application-management/application-management.component';
import {ManufacturerManagementComponent} from './staff/manufacturer-management/manufacturer-management.component';

const routes: Routes = [
  {
  path: '',
  component: ManufacturerManagementComponent,
  children: []
},
  {
    path: 'app',
    component: ApplicationManagementComponent,
    children: []
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
