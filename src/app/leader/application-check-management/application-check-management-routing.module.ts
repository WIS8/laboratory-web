import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DeviceApplicationManagementComponent} from './device-application-management/device-application-management.component';
import {DisuseApplicationManagementComponent} from './disuse-application-management/disuse-application-management.component';
import {ApplicationCheckManagementComponent} from './application-check-management.component';
const routes: Routes = [
  {
     path: '',
    // path: '',
     component: ApplicationCheckManagementComponent,
     // canActivate: [],
    children: [
      {path: 'deviceApplicationCheck',
        component: DeviceApplicationManagementComponent
      },
      {path: 'disuseApplicationCheck',
        component: DisuseApplicationManagementComponent
      },
    ]
  }
];
@NgModule({
  declarations: [
    ApplicationCheckManagementComponent,
    DeviceApplicationManagementComponent,
    DisuseApplicationManagementComponent,
  ],
  imports: [RouterModule.forChild(routes),
    ApplicationCheckManagementRoutingModule, ],
  exports: [RouterModule]
})
export class ApplicationCheckManagementRoutingModule {
}
