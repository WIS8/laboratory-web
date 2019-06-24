import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RoomManagementComponent} from './room-management/room-management.component';
import {ApplicationCheckManagementComponent} from './application-check-management/application-check-management.component';
import {AccessManagementComponent} from './access-management/access-management.component';
import {LeaderComponent} from './leader.component';

import {DeviceApplicationManagementComponent} from './application-check-management/device-application-management/device-application-management.component';
import {DisuseApplicationManagementComponent} from './application-check-management/disuse-application-management/disuse-application-management.component';
import {RoomAccessEditComponent} from './access-management/room-access-edit/room-access-edit.component';
import {StaffAcessEditComponent} from './access-management/staff-access-edit/staff-acess-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderComponent,
    // canActivate: [AdminAuthGuard],
    children: [
      {
      path: '',
      children: [
      {
        path: 'applicationCheck',
        component: ApplicationCheckManagementComponent,
        children: [
          {  path: 'deviceApplicationCheck',
            component: DeviceApplicationManagementComponent
          },
          {  path: 'disuseApplicationCheck',
            component: DisuseApplicationManagementComponent
          },
          {
            path: '',
            redirectTo: 'disuseApplicationCheck',
            component: DisuseApplicationManagementComponent,
          },
        ]
      },
      {
        path: 'roomManage',
        component: RoomManagementComponent,
      },
      {
        path: 'accessManage',
        component: AccessManagementComponent,
        children: [
          {  path: 'roomAccessEdit',
            component: RoomAccessEditComponent,
          },
          {  path: 'staffAccessEdit',
            component: StaffAcessEditComponent,
          },
          {
            path: '',
            redirectTo: 'roomAccessEdit',
            component: RoomAccessEditComponent,
          },
        ]
      },
         {path: '', redirectTo: 'applicationCheck', pathMatch: 'full'},
      ]
      }, ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
   // AppRoutingModule,
  ],
  exports: [RouterModule]
})
export class LeaderRoutingModule {
}
