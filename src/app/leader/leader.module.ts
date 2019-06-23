import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomManagementComponent } from './room-management/room-management.component';
import { ApplicationCheckManagementComponent } from './application-check-management/application-check-management.component';
import { AccessManagementComponent } from './access-management/access-management.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LeaderTopbarComponent} from './leader-topbar/leader-topbar.component';
import {AppModule} from '../app.module';
import {LeaderRoutingModule} from './leader-routing.module';
import {LeaderComponent} from './leader.component';
import {DeviceApplicationManagementComponent} from './application-check-management/device-application-management/device-application-management.component';
import {DisuseApplicationManagementComponent} from './application-check-management/disuse-application-management/disuse-application-management.component';
import { StaffAcessEditComponent } from './access-management/staff-access-edit/staff-acess-edit.component';
import { RoomAccessEditComponent } from './access-management/room-access-edit/room-access-edit.component';


@NgModule({
  declarations: [
    RoomManagementComponent,
    ApplicationCheckManagementComponent,
    AccessManagementComponent,
    LeaderComponent,
    LeaderTopbarComponent,
     DeviceApplicationManagementComponent,
     DisuseApplicationManagementComponent,
     StaffAcessEditComponent,
     RoomAccessEditComponent,
  ],
  imports: [
    // AppModule,
    // LeaderTopbarComponent,
    LeaderRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LeaderModule {}
