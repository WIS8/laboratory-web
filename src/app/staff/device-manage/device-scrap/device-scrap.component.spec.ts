import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceScrapComponent } from './device-scrap.component';

describe('DeviceScrapComponent', () => {
  let component: DeviceScrapComponent;
  let fixture: ComponentFixture<DeviceScrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceScrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
