import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  exports: [
    NgZorroAntdModule
  ]
})
export class SharedModule { }
