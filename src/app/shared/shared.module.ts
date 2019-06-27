import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgZorroAntdModule,
  NZ_I18N,
  zh_CN
} from 'ng-zorro-antd';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SexPipe } from './channel/sex.pipe';
import { StaffDetailComponent } from './template/staff-detail/staff-detail.component';

@NgModule({
  declarations: [
    SexPipe,
    StaffDetailComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StaffDetailComponent
  ],
  providers: [{
    provide: NZ_I18N,
    useValue: zh_CN
  }]
})
export class SharedModule {
}
