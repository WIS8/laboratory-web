import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceManageComponent} from './device-manage/device-manage.component';
import {StaffComponent} from './staff.component';
import {ModelManagementComponent} from './model-management/model-management.component';
import {ManufacturerManagementComponent} from './manufacturer-management/manufacturer-management.component';
import {ApplicationManagementComponent} from './application-management/application-management.component';
import {ApplicationSearchComponent} from './application-management/application-search/application-search.component';
import {ApplicationModComponent} from './application-management/application-mod/application-mod.component';
import {ApplicationDetailComponent} from './application-management/application-detail/application-detail.component';

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
    component: DeviceManageComponent
  },
  {
    path: 'ModelManage',
    component: ModelManagementComponent
  },
  {
    path: 'ApplicationManage',
    component: ApplicationManagementComponent,
    children: [
      {  path: 'search',
        component: ApplicationSearchComponent,
      },
      {  path: 'model',
        component: ApplicationModComponent
      },
      {  path: 'detail',
        component: ApplicationDetailComponent
      },
     /* {
        path: '',
        redirectTo: 'search',
        component: ApplicationSearchComponent,
      },*/
    ]
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {
}
