import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceApplicationManagementComponent } from '../application-check-management/device-application-management/device-application-management.component';
import { DisuseApplicationManagementComponent } from '../application-check-management/disuse-application-management/disuse-application-management.component';
import {ApplicationCheckManagementComponent} from './application-check-management.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ApplicationCheckManagementRoutingModule} from './application-check-management-routing.module';

@NgModule({
  declarations: [
      ApplicationCheckManagementComponent,
      DeviceApplicationManagementComponent,
      DisuseApplicationManagementComponent,
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
