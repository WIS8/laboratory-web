import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceQueryComponent } from './device-query.component';

describe('DeviceQueryComponent', () => {
  let component: DeviceQueryComponent;
  let fixture: ComponentFixture<DeviceQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
