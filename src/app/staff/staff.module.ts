import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerManagementComponent } from './manufacturer-management/manufacturer-management.component';
import { ModelManagementComponent } from './model-management/model-management.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import {AppRoutingModule} from '../app-routing.module';
import { StaffTopbarComponent } from './staff-topbar/staff-topbar.component';

@NgModule({
  declarations: [
    ManufacturerManagementComponent,
    ModelManagementComponent,
    ApplicationManagementComponent,
    StaffTopbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class StaffModule { }
