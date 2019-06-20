import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomManagementComponent } from './room-management/room-management.component';
import { ApplicationCheckManagementComponent } from './application-check-management/application-check-management.component';
import { AccessManagementComponent } from './access-management/access-management.component';
import { LeaderTopbarComponent } from './leader-topbar/leader-topbar.component';
import { AddRoomPoppingWindowComponent } from './add-room-popping-window/add-room-popping-window.component';

@NgModule({
  declarations: [RoomManagementComponent, ApplicationCheckManagementComponent, AccessManagementComponent, LeaderTopbarComponent, AddRoomPoppingWindowComponent],
  imports: [
    CommonModule
  ]
})
export class LeaderModule { }
