import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RoomManagementComponent} from './room-management/room-management.component';
import {LeaderTopbarComponent} from './leader-topbar/leader-topbar.component';
import {ApplicationCheckManagementComponent} from './application-check-management/application-check-management.component';
import {AccessManagementComponent} from './access-management/access-management.component';
import {LeaderComponent} from './leader.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderComponent,
    // canActivate: [AdminAuthGuard],
    children: [
      {
        path: 'applicationCheck',
        component: ApplicationCheckManagementComponent,
        // canActivate: [BossAuthGuard]
      },
      {
        path: 'roomManage',
        component: RoomManagementComponent,
        // canActivate: [BossAuthGuard]
      },
      {
        path: 'accessManage',
        component: AccessManagementComponent,
        // canActivate: [BossAuthGuard]
      },
      // {
      //   path: '',
      //   canActivateChild: [AdminAuthGuard],
      //   children: [
      //     {path: 'diggers', component: DiggerListComponent},
      //     {path: 'diggers/:id', component: DiggerDetailComponent},
      //     {path: 'pushdozers', component: PushdozerListComponent},
      //     {path: 'pushdozers/:id', component: PushdozerDetailComponent},
      //     {path: 'drivers', component: DriverListComponent},
      //     {path: '', redirectTo: 'diggers', pathMatch: 'full'}
      //   ]
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule {
}
