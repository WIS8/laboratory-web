import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCheckManagementComponent } from './application-check-management.component';

describe('ApplicationManagementComponent', () => {
  let component: ApplicationCheckManagementComponent;
  let fixture: ComponentFixture<ApplicationCheckManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCheckManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCheckManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
