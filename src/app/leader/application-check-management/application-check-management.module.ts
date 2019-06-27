import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceApplicationManagementComponent } from '../application-check-management/device-application-management/device-application-management.component';
import { DisuseApplicationManagementComponent } from '../application-check-management/disuse-application-management/disuse-application-management.component';
import {ApplicationCheckManagementComponent} from './application-check-management.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ApplicationCheckManagementRoutingModule} from './application-check-management-routing.module';
import { UrgentApplyComponent } from './device-application-management/urgent-apply/urgent-apply.component';
import { ByStateComponent } from './disuse-application-management/by-state/by-state.component';


@NgModule({
  declarations: [
      ApplicationCheckManagementComponent,
      DeviceApplicationManagementComponent,
      DisuseApplicationManagementComponent,
      UrgentApplyComponent,
      ByStateComponent,
  ],
  imports: [
    // AppModule,
    // LeaderTopbarComponent,
    ApplicationCheckManagementRoutingModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class ApplicationCheckManagementModule {}
