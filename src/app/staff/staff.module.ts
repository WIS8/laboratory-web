import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceManageComponent } from './device-manage/device-manage.component';
import {StaffRoutingModule} from './staff-routing.module';
import {StaffComponent} from './staff.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ManufacturerManagementComponent } from './manufacturer-management/manufacturer-management.component';
import { ModelManagementComponent } from './model-management/model-management.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationSearchComponent } from './application-management/application-search/application-search.component';
import { ApplicationModComponent } from './application-management/application-mod/application-mod.component';
import { ApplicationDetailComponent } from './application-management/application-detail/application-detail.component';

@NgModule({
  declarations: [
    StaffComponent,
    DeviceManageComponent,
    ManufacturerManagementComponent,
    ModelManagementComponent,
    ApplicationManagementComponent,
    ApplicationSearchComponent,
    ApplicationModComponent,
    ApplicationDetailComponent,
  ],
  imports: [
    StaffRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaffModule { }
