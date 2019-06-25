import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceManageComponent} from './device-manage/device-manage.component';
import {StaffComponent} from './staff.component';
import {ModelManagementComponent} from './model-management/model-management.component';
import {ManufacturerManagementComponent} from './manufacturer-management/manufacturer-management.component';
import {ApplicationManagementComponent} from './application-management/application-management.component';
import {DeviceQueryComponent} from './device-manage/device-query/device-query.component';
import {DeviceRegisterComponent} from './device-manage/device-register/device-register.component';
import {DeviceScrapComponent} from './device-manage/device-scrap/device-scrap.component';
import {DeviceAnalyseComponent} from './device-manage/device-analyse/device-analyse.component';
import {DeviceRepairComponent} from './device-manage/device-repair/device-repair.component';

const routes: Routes = [{
  path: '',
  component: StaffComponent,
  children: [
  {
    path: 'ManufacturerManage',
    component: ManufacturerManagementComponent
  },
  {
    path: 'DeviceManage',
    component: DeviceManageComponent,
    children: [
      {
        path: 'DeviceQuery',
        component: DeviceQueryComponent
      },
      {
        path: 'DeviceRegister',
        component: DeviceRegisterComponent
      },
      {
        path: 'DeviceRepair',
        component: DeviceRepairComponent
      },
      {
        path: 'DeviceScrap',
        component: DeviceScrapComponent
      },
      {
        path: 'DeviceAnalyse',
        component: DeviceAnalyseComponent
      },
      {
        path: '',
        redirectTo: 'DeviceQuery',
        pathMatch: 'prefix',
      },
    ]
  },
  {
    path: 'ModelManage',
    component: ModelManagementComponent
  },
  {
    path: 'ApplicationManage',
    component: ApplicationManagementComponent
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {
}
