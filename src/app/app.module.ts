import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ApplicationManagementComponent} from './staff/application-management/application-management.component';
import {ManufacturerManagementComponent} from './staff/manufacturer-management/manufacturer-management.component';
import {ModelManagementComponent} from './staff/model-management/model-management.component';
import {StaffTopbarComponent} from './staff/staff-topbar/staff-topbar.component';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ApplicationManagementComponent,
    ManufacturerManagementComponent,
    ModelManagementComponent,
    StaffTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
