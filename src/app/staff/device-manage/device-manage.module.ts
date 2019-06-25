import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceManageComponent } from './device-manage.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeviceManageComponent,
    ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DeviceManageModule { }
