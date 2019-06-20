import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationManagementComponent} from './staff/application-management/application-management.component';
import {ManufacturerManagementComponent} from './staff/manufacturer-management/manufacturer-management.component';
import {ModelManagementComponent} from './staff/model-management/model-management.component';
import {RoomManagementComponent} from './leader/room-management/room-management.component';
import {ApplicationCheckManagementComponent} from './leader/application-check-management/application-check-management.component';
import {AccessManagementComponent} from './leader/access-management/access-management.component';
import {LeaderTopbarComponent} from './leader/leader-topbar/leader-topbar.component';

const routes: Routes = [
  { path: '', component: LeaderTopbarComponent , data: {title: '领导管理'}},
  { path: 'leader-room-management', component: RoomManagementComponent, data: { title: '库房管理'} },   // 库房管理
  {path: 'leader-application-check-management', component: ApplicationCheckManagementComponent, data: { title: '申请管理'} },  // 申请管理
  // {path: 'leader-access-management', component: AccessManagementComponent, data: { title: '权限管理'}} ,
  {path: 'leader-access-management', component: AccessManagementComponent, data: { title: '权限管理'}} ,
  {
    path: 'manu',
    component: ManufacturerManagementComponent,
    children: []
  },
  {
    path: 'app',
    component: ApplicationManagementComponent,
    children: []
  },
  {
    path: 'mod',
    component: ModelManagementComponent,
    children: []
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
