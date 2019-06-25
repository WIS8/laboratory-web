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
import { DeviceQueryComponent } from './device-manage/device-query/device-query.component';
import {DeviceScrapComponent} from './device-manage/device-scrap/device-scrap.component';
import {DeviceAnalyseComponent} from './device-manage/device-analyse/device-analyse.component';
import {DeviceRepairComponent} from './device-manage/device-repair/device-repair.component';
import {DeviceRegisterComponent} from './device-manage/device-register/device-register.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    StaffComponent,
    DeviceManageComponent,
    ManufacturerManagementComponent,
    ModelManagementComponent,
    ApplicationManagementComponent,
    DeviceQueryComponent,
    DeviceRepairComponent,
    DeviceRegisterComponent,
    DeviceScrapComponent,
    DeviceAnalyseComponent,
  ],
  imports: [
    StaffRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ]
})
export class StaffModule { }
