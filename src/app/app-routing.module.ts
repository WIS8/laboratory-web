import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationManagementComponent} from './staff/application-management/application-management.component';
import {ManufacturerManagementComponent} from './staff/manufacturer-management/manufacturer-management.component';
import {ModelManagementComponent} from './staff/model-management/model-management.component';
import {RoomManagementComponent} from './leader/room-management/room-management.component';
import {ApplicationCheckManagementComponent} from './leader/application-check-management/application-check-management.component';
import {AccessManagementComponent} from './leader/access-management/access-management.component';
import {LeaderTopbarComponent} from './leader/leader-topbar/leader-topbar.component';
import {DeviceApplicationManagementComponent} from './leader/application-check-management/device-application-management/device-application-management.component';
import {DisuseApplicationManagementComponent} from './leader/application-check-management/disuse-application-management/disuse-application-management.component';
import {LeaderComponent} from './leader/leader.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './leader/leader.module#LeaderModule',
    // component: LeaderTopbarComponent,
    // canLoad: [DriverAuthGuard]
  },
  // {path: 'leader',
  //   loadChildren: './leader/leader.module#LeaderModule',
  //   // canLoad: [XXXXGuard]
  // },
  // {
  //   path: 'manu',
  //   component: ManufacturerManagementComponent,
  //   children: []
  // },
  // {
  //   path: 'app',
  //   component: ApplicationManagementComponent,
  //   children: []
  // },
  // {
  //   path: 'mod',
  //   component: ModelManagementComponent,
  //   children: []
  // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
