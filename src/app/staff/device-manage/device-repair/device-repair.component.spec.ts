import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRepairComponent } from './device-repair.component';

describe('DeviceRepairComponent', () => {
  let component: DeviceRepairComponent;
  let fixture: ComponentFixture<DeviceRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
