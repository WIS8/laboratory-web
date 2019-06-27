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
import {UrgentApplyComponent} from './application-check-management/device-application-management/urgent-apply/urgent-apply.component';
import {ByStateComponent} from './application-check-management/disuse-application-management/by-state/by-state.component';

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
            component: DeviceApplicationManagementComponent,
            // runGuardsAndResolvers: 'paramsChange',
            children: [
              {
                path: 'urgent',
                component: UrgentApplyComponent,
              },
              {
                path: 'common',
                component: UrgentApplyComponent,
              },
              {
                path: 'finish',
                component: UrgentApplyComponent,
              },
              {
                path: 'modify',
                component: UrgentApplyComponent,
              },
            ]
          },
          {  path: 'disuseApplicationCheck',
            component: DisuseApplicationManagementComponent,
            children: [
              {
                path: 'commit',
                component: ByStateComponent,
              },
              {
                path: 'cannot',
                component: ByStateComponent,
              },
              {
                path: 'disuse',
                component: ByStateComponent,
              },
            ]
          },
          // {
          //   path: '',
          //   redirectTo: 'deviceApplicationCheck',
          //   component: DeviceApplicationManagementComponent,
          // },
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
