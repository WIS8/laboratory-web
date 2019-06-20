import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomManagementComponent } from './room-management/room-management.component';
import { ApplicationCheckManagementComponent } from './application-check-management/application-check-management.component';
import { AccessManagementComponent } from './access-management/access-management.component';
import { DeviceApplicationManagementComponent } from './application-check-management/device-application-management/device-application-management.component';
import { DisuseApplicationManagementComponent } from './application-check-management/disuse-application-management/disuse-application-management.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LeaderTopbarComponent} from './leader-topbar/leader-topbar.component';


@NgModule({
  declarations: [
    RoomManagementComponent,
    ApplicationCheckManagementComponent,
    AccessManagementComponent,
    // LeaderTopbarComponent,
    // DeviceApplicationManagementComponent,
    // DisuseApplicationManagementComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LeaderModule {}
