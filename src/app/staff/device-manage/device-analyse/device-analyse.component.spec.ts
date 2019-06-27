import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAnalyseComponent } from './device-analyse.component';

describe('DeviceAnalyseComponent', () => {
  let component: DeviceAnalyseComponent;
  let fixture: ComponentFixture<DeviceAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
