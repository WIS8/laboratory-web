import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceApplicationManagementComponent } from './device-application-management.component';

describe('DeviceApplicationManagementComponent', () => {
  let component: DeviceApplicationManagementComponent;
  let fixture: ComponentFixture<DeviceApplicationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceApplicationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceApplicationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
