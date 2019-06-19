import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationManagementComponent} from './staff/application-management/application-management.component';
import {ManufacturerManagementComponent} from './staff/manufacturer-management/manufacturer-management.component';
import {ModelManagementComponent} from "./staff/model-management/model-management.component";

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
  },
  {
    path: 'mod',
    component: ModelManagementComponent,
    children: []
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
