import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerManagementComponent } from './manufacturer-management.component';

describe('ManufacturerManagementComponent', () => {
  let component: ManufacturerManagementComponent;
  let fixture: ComponentFixture<ManufacturerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
